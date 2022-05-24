using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ASP.NET_Web_Api.Controllers.Models;
using ASP.NET_Web_Api.Data;
using ASP.NET_Web_Api.Data.Models;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace ASP.NET_Web_Api.Controllers
{
    [EnableCors("MyAllowSpecificOrigins")]
    [ApiController]
    [Route("[controller]")]
    public class NewsDataController : ControllerBase
    {
        private INewsDataSql newsdatasql { get; set; }

        public NewsDataController(INewsDataSql DataRepository)
        {

            newsdatasql = DataRepository;
        }


        [HttpPost("/AddNews")]
        public int AddNews([FromBody]News news)
        {
            return newsdatasql.AddNews(news);
        }


        [HttpDelete("/DeleteNews/{Newsid}")]
        public int DeleteNews(int Newsid)
        {
            return newsdatasql.DeleteNews(Newsid);
        }

        [HttpPut("/UpdataNews")]
        public int UpdataNews([FromBody]UpdateNewsViewModel updateViewModel)
        {
            if (!ModelState.IsValid)
            {
                return 0;
            }
            else
            {
                int update = newsdatasql.UpdataNews(updateViewModel.Target, updateViewModel.NewsId);
                return update;
            }
        }

        [HttpGet("/GetNewsById/{Newsid}")]
        public News GetNewsById(int Newsid)
        {
            return newsdatasql.GetNewsById(Newsid);
        }

        [HttpGet("/GetNews")]
        public List<News> GetNews()
        {
            return newsdatasql.GetNews();
        }
    }
}
