using ASP.NET_Web_Api.Data.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Collections.Generic;
using System.Data.SqlClient;

using System.Text.Json;

namespace ASP.NET_Web_Api.Data
{
    public class UserDataSql : IUserDataSql
    {
        private readonly string connectionString_;
        public static User AllemptyLoginUser;
        public UserDataSql(IConfiguration configuration)
        {
            connectionString_ = configuration["ConnectionStrings:DefaultConnection"];
        }

        public int DeleteUserByUsername(string username)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"DELETE FROM [LoginUser] WHERE [username]='{username}';";
            using SqlCommand command = new SqlCommand(commandText, connection);
            return command.ExecuteNonQuery();
        }

        public int AddUser(User user)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"insert  into [LoginUser] (username,password,permission)" +
                $"values('{user.username}','{user.password}','{user.permission}')";
            using SqlCommand command = new SqlCommand(commandText, connection);
            return command.ExecuteNonQuery();
        }

        public int UpdataUser(User user, string username)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Update [LoginUser] SET password='{user.password}',permission='{user.permission}' " +
               $"where username='{username}' ";
            using SqlCommand command = new SqlCommand(commandText, connection);
            return command.ExecuteNonQuery();
        }

        public User GetUserByUsername(string username)
        {
            User user = null;
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select username,password,permission from [LoginUser]" +
               $"where username='{username}'";
            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                user = new()
                {
                    username = reader.GetString(0),
                    password = reader.GetString(1),
                    permission = int.Parse(reader.GetString(2))
                };
            }
            Console.WriteLine(JsonSerializer.Serialize(user));
            return user;
        }


        public List<User> GetUser()
        {
            List<User> userList = new();

            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select username,password,permission from [LoginUser]";
            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                User user = new()
                {
                    username = reader.GetString(0),
                    password = reader.GetString(1),
                    permission = int.Parse(reader.GetString(2))
                };
                userList.Add(user);
            }
            return userList;
        }
    }
}
