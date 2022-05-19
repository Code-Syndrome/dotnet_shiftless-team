using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ASP.NET_Web_Api.Data;

namespace ASP.NET_Web_Api.Controllers
{
    [EnableCors("MyAllowSpecificOrigins")]
    [ApiController]
    public class UserDataController : ControllerBase
    {
        private IUserDataSql UserDatasql { get; set; }

        public UserDataController(IUserDataSql DataRepository)
        {

            UserDatasql = DataRepository;
        }


        [HttpGet("AddLoginUser/{JsonLoginUser}")]
        public void AddLoginUser(string JsonLoginUser)
        {
            UserDatasql.AddLoginUser(JsonLoginUser);
        }


        [HttpDelete("DeleteLoginUser/{username}")]
        public void DeleteLoginUser(string username)
        {
            UserDatasql.DeleteLoginUser(username);
        }

        [HttpPut("UpdataLoginUser/{JsonLoginUser}")]
        public void UpdataLoginUser(string JsonLoginUser)
        {
            UserDatasql.UpdataLoginUser(JsonLoginUser);
        }

        [HttpGet("SelectLoginUser/{username}")]
        public string SelectLoginUser(string username)
        {
            return UserDatasql.SelectLoginUser(username);
        }
    }
}
