using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ASP.NET_Web_Api.Data;
using ASP.NET_Web_Api.Data.Models;

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

        
        [HttpPost("{JsonNews}")]
        public int AddNews(News news)
        {
            return newsdatasql.AddNews(news);
        }

        
        [HttpDelete("{Newsid}")]
        public ActionResult<int> DeleteNews(int Newsid)
        {
            return newsdatasql.DeleteNews(Newsid);
        }

        [HttpPut("{JsonNews}/{Newsid}")]
        public int UpdataNews(News news,string NewsId)
        {
            return  newsdatasql.UpdataNews(news,NewsId);
        }

        [HttpGet("{NewsId}")]
        public News GetNewsById(int Newsid)
        {
            return newsdatasql.GetNewsById(Newsid);
        }

        [HttpGet("{NewsId}")]
        public News GetNewsById(int Newsid)
        {
            return newsdatasql.GetNewsById(Newsid);
        }
    }
}
