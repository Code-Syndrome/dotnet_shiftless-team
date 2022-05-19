using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ASP.NET_Web_Api.Controllers.Models;
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
