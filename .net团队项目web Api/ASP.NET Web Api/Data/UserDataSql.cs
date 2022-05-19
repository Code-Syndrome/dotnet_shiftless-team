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
    public class UserDataSql:IUserDataSql
    {
        private readonly string connectionString_;
        public static User AllemptyLoginUser;
        public UserDataSql(IConfiguration configuration)
        {
            connectionString_ = configuration["ConnectionStrings:DefaultConnection"];
        }
        public void DeleteLoginUser(string username)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"DELETE FROM [LoginUser] WHERE [username]='{username}';";
            using SqlCommand command = new SqlCommand(commandText, connection);
            command.ExecuteNonQuery();
        }
        public void AddLoginUser(string LoginUserNow)
        {

            //User LoginUser = (User)JsonConvert.DeserializeObject(now);

            User? LoginUser =JsonSerializer.Deserialize<User>(LoginUserNow);

            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"insert  into [LoginUser] (username,password)" +
                $"values('{LoginUser.username}','{LoginUser.password}';";
            using SqlCommand command = new SqlCommand(commandText, connection);
            command.ExecuteNonQuery();
        }

        public void UpdataLoginUser(string LoginUserNow)
        {
            //User LoginUser = (User)JsonConvert.DeserializeObject(LoginUserNow);
            User LoginUser=new User();
            LoginUser.username = "user3";
            LoginUser.password = "1111";
            LoginUser.permission = 1;
            using var connection = new
                SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Update [LoginUser] password='{LoginUser.password}'" +
               $"where username='{LoginUser.username}'";
            using SqlCommand command = new SqlCommand(commandText, connection);
            command.ExecuteNonQuery();
        }

        private void ReadSingleRow(IDataRecord dataRecord)
        {
            User emptyLoginUser = new User();
            emptyLoginUser.username = dataRecord[0].ToString();
            emptyLoginUser.password = dataRecord[1].ToString();
            AllemptyLoginUser = emptyLoginUser;
        }

        public string SelectLoginUser(string usrname)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select username,password from [LoginUser]" +
               $"where username='{usrname}'";
            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                ReadSingleRow((IDataRecord)reader);
            }
            reader.Close();
            return JsonSerializer.Serialize(AllemptyLoginUser);
        }
    }
}
