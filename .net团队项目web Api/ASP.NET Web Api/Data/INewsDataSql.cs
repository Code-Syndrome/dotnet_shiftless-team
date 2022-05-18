using ASP.NET_Web_Api.Data.Models;
using System.Data;

namespace ASP.NET_Web_Api.Data
{
    public interface INewsDataSql
    {
        public void DeleteNews(int Newsid);
        public void AddNews(string newsNow);
        public void UpdataNews(string newsNow);
        public void ReadSingleRow(IDataRecord dataRecord);
        public string SelectNews(int Newsid);
    }
}
