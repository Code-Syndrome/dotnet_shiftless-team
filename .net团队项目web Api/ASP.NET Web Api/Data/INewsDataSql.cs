using ASP.NET_Web_Api.Data.Models;
using System.Data;
using System.Collections.Generic;
namespace ASP.NET_Web_Api.Data
{
    public interface INewsDataSql
    {
        public int DeleteNews(int Newsid);
        public int AddNews(News news);
        public int UpdataNews(News news,string newsId);
        public News GetNewsById(int Newsid);
        public string GetNews();
    }
}
