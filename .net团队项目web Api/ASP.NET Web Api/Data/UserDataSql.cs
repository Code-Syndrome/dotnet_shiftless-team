using ASP.NET_Web_Api.Data.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Collections.Generic;
using System.Data.SqlClient;

using System.Text.Json;
using Newtonsoft.Json;

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
            string SelectcommandText = $"Select username from [LoginUser]" +
              $"where username=@Username";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@Username",username)
            };
            using SqlCommand command = new SqlCommand(SelectcommandText, connection);
            command.Parameters.AddRange(parameters);

            using SqlDataReader dr = command.ExecuteReader();
            if (!dr.Read())
            {
                return 0;
            }
            else
            {
                dr.Close();
                string commandText = $"DELETE FROM [LoginUser] WHERE username=@Username;";
                command.CommandText = commandText;
                return command.ExecuteNonQuery();
            }

        }
        public int AddUser(User user)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string SelectcommandText = $"Select username from [LoginUser]" +
               $"where username=@Username";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@Username",user.username)
            };
            using SqlCommand command = new SqlCommand(SelectcommandText, connection);
            command.Parameters.AddRange(parameters);

            using SqlDataReader dr = command.ExecuteReader();
            if (dr.Read())
            {
                return 0;
            }
            else
            {
                dr.Close();
                string commandText = $"insert  into [LoginUser] (username,password,permission)" +
                                $"values(@Username,@Password,@Permission)";
                command.CommandText = commandText;
                SqlParameter[] parametersInsert = new SqlParameter[]
                {
                    new SqlParameter("@Password",user.password),
                    new SqlParameter("@Permission",user.permission),
                };
                command.Parameters.AddRange(parametersInsert);

                return command.ExecuteNonQuery();
            }

        }
        public int UpdataUser(User user, string username)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string SelectcommandText = $"Select username from [LoginUser]" +
              $"where username=@Username";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@Username",username)
            };
            using SqlCommand command = new SqlCommand(SelectcommandText, connection);
            command.Parameters.AddRange(parameters);

            using SqlDataReader dr = command.ExecuteReader();
            if (!dr.Read())
            {
                return 0;
            }
            else
            {
                dr.Close();
                string commandText = $"Update [LoginUser] SET password=@Password,permission=@Permission " +
                               $"where username=@Username ";
                SqlParameter[] parametersInsert = new SqlParameter[]
                    {
                    new SqlParameter("@Password",user.password),
                    new SqlParameter("@Permission",user.permission),
                    };
                command.CommandText = commandText;
                command.Parameters.AddRange(parametersInsert);
                return command.ExecuteNonQuery();
            }

        }
        public User GetUserByUsername(string username)
        {
            User user;
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select username,password,permission from [LoginUser]" +
               $"where username=@Username";
            using SqlCommand command = new SqlCommand(commandText, connection);

            SqlParameter[] parametersInsert = new SqlParameter[]
                {
                    new SqlParameter("@Username",username),
                };
            command.Parameters.AddRange(parametersInsert);
            using SqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {
                user = new()
                {
                    username = reader.GetString(0),
                    password = reader.GetString(1),
                    permission = int.Parse(reader.GetString(2))
                };
                return user;
            }
            else
            {
                return null;
            }
            
        }
        public List<User> GetUser()
        {
            List<User> userList = new();

            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select username,password,permission from [LoginUser]";
            using SqlCommand command = new SqlCommand(commandText, connection);
            using SqlDataReader reader = command.ExecuteReader();
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
