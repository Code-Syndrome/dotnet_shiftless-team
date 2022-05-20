using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ASP.NET_Web_Api.Controllers.Models;
using ASP.NET_Web_Api.Data;
using ASP.NET_Web_Api.Data.Models;
using System.Collections.Generic;

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

        
        [HttpPost]
        public int AddNews([FromBody]News news)
        {
            return newsdatasql.AddNews(news);
        }

        
        [HttpDelete("{Newsid}")]
        public ActionResult<int> DeleteNews(int Newsid)
        {
            return newsdatasql.DeleteNews(Newsid);
        }

        [HttpPut]
        public ActionResult<UpdateResultViewModel> 
            UpdataNews([FromBody]UpdateNewsViewModel updateViewModel)
        {
            if(!ModelState.IsValid) {
                return new UpdateResultViewModel() {
                    News = null,
                    StatusCode = 2,
                    Message = "model is invalid !"
                };
            }
            else {
                int update = newsdatasql.UpdataNews(updateViewModel.Target, updateViewModel.NewsId);
                return new UpdateResultViewModel() {
                    News = updateViewModel.Target,
                    StatusCode = 0,
                    Message = "news update success !"
                };
            }            
        }

        [HttpGet("{Newsid}")]
        public News GetNewsById(int Newsid)
        {
            return newsdatasql.GetNewsById(Newsid);
        }

        [HttpGet]
        public List<News> GetNews()
        {
            return newsdatasql.GetNews();
        }
    }
}
