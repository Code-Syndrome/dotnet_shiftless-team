using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ASP.NET_Web_Api.Data;

namespace ASP.NET_Web_Api.Controllers
{
    [EnableCors("MyAllowSpecificOrigins")]
    [ApiController]
    public class NewsDataController : ControllerBase
    {
        private INewsDataSql newsdatasql { get; set; }

        public NewsDataController(INewsDataSql DataRepository)
        {

            newsdatasql = DataRepository;
        }

        
        [HttpGet("AddNews/{JsonNews}")]
        public void AddNews(string news)
        {
            newsdatasql.AddNews(news);
        }


        [HttpDelete("DeleteNews/{Newsid}")]
        public void DeleteNews(int Newsid)
        {
            newsdatasql.DeleteNews(Newsid);
        }

        [HttpPut("UpdataNews/{JsonNews}")]
        public void UpdataNews(string news)
        {
            newsdatasql.UpdataNews(news);
        }

        [HttpGet("SelectNews/{NewsId}")]
        public string SelectNews(int Newsid)
        {
            return newsdatasql.SelectNews(Newsid);
        }
    }
}
