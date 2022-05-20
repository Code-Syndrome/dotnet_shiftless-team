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
            string commandText = $"DELETE FROM [News] WHERE [NewsId]='{Newsid}';";
            using SqlCommand command = new SqlCommand(commandText, connection);
            return command.ExecuteNonQuery();
        }
        public int AddNews(News news)
        {
            // News news = (News)JsonConvert.DeserializeObject(newsNow);
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"insert  into [News] (NewsId,NewsTitle,NewsContent)" +
                $"values('{news.NewsId}','{news.NewsTitle}','{news.NewsContent}')";
            using SqlCommand command = new SqlCommand(commandText, connection);
            return command.ExecuteNonQuery();
        }

        public int UpdataNews(News news, string newsId)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Update [News] SET NewsTitle='{news.NewsTitle}',NewsContent='{news.NewsContent}' " +
               $"where NewsId='{newsId}' ";
            using SqlCommand command = new SqlCommand(commandText, connection);
            return command.ExecuteNonQuery();
        }


        public News GetNewsById(int id)
        {
            News news = null;
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select NewsId,NewsTitle,NewsContent from [News]" +
               $"where NewsId='{id}'";
            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                news = new()
                {
                    NewsId = reader.GetString(0),
                    NewsTitle = reader.GetString(1),
                    NewsContent = reader.GetString(2)
                };
            }

            return news;
        }

        public List<News> GetNews()
        {
            List<News> newsList = new();

            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select NewsId,NewsTitle,NewsContent from [News]";
            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                News news = new()
                {
                    NewsId = reader.GetString(0),
                    NewsTitle = reader.GetString(1),
                    NewsContent = reader.GetString(2)
                };
                newsList.Add(news);
            }

            return newsList;
        }
    }
}

