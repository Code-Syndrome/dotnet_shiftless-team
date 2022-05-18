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
    public class NewsDataSql:INewsDataSql
    {
        private readonly string connectionString_;
        public static News AllemptyNews;
        public NewsDataSql(IConfiguration configuration)
        {
            connectionString_ = configuration["ConnectionStrings:DefaultConnection"];
        }
        public void DeleteNews(int Newsid)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"DELETE FROM [News] WHERE [NewsId]='{Newsid}';";
            using SqlCommand command = new SqlCommand(commandText, connection);
            command.ExecuteNonQuery();
        }
        public void AddNews(string newsNow)
        {
            News news = (News)JsonConvert.DeserializeObject(newsNow);
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"insert  into [News] (NewsId,NewsTitle,NewsContent)" +
                $"values('{news.NewsId}','{news.NewsTitle}','{news.NewsContent}')';";
            using SqlCommand command = new SqlCommand(commandText, connection);
            command.ExecuteNonQuery();
        }

        public void UpdataNews(string newsNow)
        {
            News news = (News)JsonConvert.DeserializeObject(newsNow);
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Update [News] NewsTitle='{news.NewsTitle}',NewsContent='{news.NewsContent}'" +
               $"where NewsId='{news.NewsId}'";
            using SqlCommand command = new SqlCommand(commandText, connection);
            command.ExecuteNonQuery();
        }

        public void ReadSingleRow(IDataRecord dataRecord)
        {
            News emptyNews = new News();
            emptyNews.NewsId = (int)dataRecord[0];
            emptyNews.NewsTitle = dataRecord[1].ToString();
            emptyNews.NewsContent = dataRecord[2].ToString();
            AllemptyNews= emptyNews;
        }

        public string SelectNews(int id)
        {
            using var connection = new SqlConnection(connectionString_);
            connection.Open();
            string commandText = $"Select NewsId,NewsTitle,NewsContent from [News]" +
               $"where NewsId='{id}'";
            using SqlCommand command = new SqlCommand(commandText, connection);
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                ReadSingleRow((IDataRecord)reader);
            }
            reader.Close();
            return JsonConvert.SerializeObject(AllemptyNews);
        }
    }
}

