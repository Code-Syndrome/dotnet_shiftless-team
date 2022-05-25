using ASP.NET_Web_Api.Data.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Collections.Generic;
using System.Data.SqlClient;
using Newtonsoft.Json;

namespace ASP.NET_Web_Api.Data
{
    public class NewsDataSql : INewsDataSql
    {
        private readonly string connectionString_;
        public NewsDataSql(IConfiguration configuration)
        {
            connectionString_ = configuration["ConnectionStrings:DefaultConnection"];
        }
        public int DeleteNews(int Newsid)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select NewsId from [News]" +
             $"where NewsId=@NewsId";

            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@NewsId",Newsid)
            };
            command.Parameters.AddRange(parameters);

            using SqlDataReader dr = command.ExecuteReader();
            if (!dr.Read())
            {
                return 0;
            }
            else
            {
                dr.Close();
                string commandtext = $"DELETE FROM [News] WHERE [NewsId]=@NewsId;";
                command.CommandText = commandtext;
                return command.ExecuteNonQuery();
            }

        }
        public int AddNews(News news)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select NewsId from [News]" +
              $"where NewsId=@NewsId";

            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@NewsId",news.NewsId),
                new SqlParameter("@NewsTitle",news.NewsTitle),
                new SqlParameter("@NewsContent",news.NewsContent),
            };
            command.Parameters.AddRange(parameters);

            using SqlDataReader dr = command.ExecuteReader();
            if (dr.Read())
            {
                return 0;
            }
            else
            {
                dr.Close();
                string commandtext = $"insert  into [News] (NewsId,NewsTitle,NewsContent)" +
                                $"values(@NewsId,@NewsTitle,@NewsContent)";
                command.CommandText = commandtext;
                return command.ExecuteNonQuery();
            }

        }
        public int UpdataNews(News news, string newsId)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select NewsId from [News]" +
             $"where NewsId=@NewsId";

            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@NewsId",newsId)
            };
            command.Parameters.AddRange(parameters);

            using SqlDataReader dr = command.ExecuteReader();
            if (!dr.Read())
            {
                return 0;
            }
            else
            {
                dr.Close();
                string commandtext = $"Update News SET NewsTitle=@NewsTitle,NewsContent=@NewsContent " +
                              $"where NewsId=@NewsId ";
                SqlParameter[] parametersInsert = new SqlParameter[]
                   {
                      new SqlParameter("@NewsTitle",news.NewsTitle),
                      new SqlParameter("@NewsContent",news.NewsContent),
                   };
                command.Parameters.AddRange(parametersInsert);
                command.CommandText = commandtext;
                return command.ExecuteNonQuery();
            }

        }
        public News GetNewsById(int id)
        {
            News news;
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select NewsId from [News]" +
             $"where NewsId=@Id";

            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@Id",id)
            };
            command.Parameters.AddRange(parameters);

            using SqlDataReader dr = command.ExecuteReader();
            if (!dr.Read())
            {
                return null;
            }
            else
            {
                dr.Close();
                string commandtext = $"Select NewsId,NewsTitle,NewsContent from [News]" +
                               $"where NewsId=@Id";
                command.CommandText = commandtext;
                using SqlDataReader sqldr = command.ExecuteReader();
                sqldr.Read();
                news = new()
                {
                    NewsId =sqldr.GetInt32(0),
                    NewsTitle = sqldr.GetString(1),
                    NewsContent = sqldr.GetString(2)
                };
                sqldr.Close();
                return news;
            }

        }
        public string GetNews()
        {
            List<News> newsList = new();

            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select NewsId,NewsTitle,NewsContent from [News]";
            using SqlCommand command = new SqlCommand(commandText, connection);
            using SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                News news = new()
                {
                    NewsId = reader.GetInt32(0),
                    NewsTitle = reader.GetString(1),
                    NewsContent = reader.GetString(2)
                };
                newsList.Add(news);
            }
            return JsonConvert.SerializeObject(newsList);

        }
    }
}

