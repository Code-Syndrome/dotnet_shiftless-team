using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ASP.NET_Web_Api.Data;
using ASP.NET_Web_Api.Data.Models;
using System.Collections.Generic;
using ASP.NET_Web_Api.Controllers.Models;
using Newtonsoft.Json;

namespace ASP.NET_Web_Api.Controllers
{
    [EnableCors("MyAllowSpecificOrigins")]
    [ApiController]
    [Route("[controller]")]
    public class UserDataController : ControllerBase
    {
        private IUserDataSql UserDatasql { get; set; }

        public UserDataController(IUserDataSql DataRepository)
        {

            UserDatasql = DataRepository;
        }


        [HttpPost("/AddUser")]
        public int AddUser([FromBody]User user)
        {
            return UserDatasql.AddUser(user);
        }


        [HttpDelete("/DeleteUserByUsername/{username}")]
        public int DeleteUserByUsername(string username)
        {
            return UserDatasql.DeleteUserByUsername(username);
        }

        [HttpPut("/UpdataUser")]
        public int UpdataUser([FromBody]UpdateUserViewModel updateViewModel)
        {
            if (!ModelState.IsValid)
            {
                return 0;
            }
            else
            {
                int update = UserDatasql.UpdataUser(updateViewModel.Target, updateViewModel.Username);
                return update;
            }
        }

        [HttpGet("/GetUserByUsername/{username}")]
        public User GetUserByUsername(string username)
        {
            return UserDatasql.GetUserByUsername(username);
        }

        [HttpGet("/GetUser")]
        public List<User> GetUser()
        {
            return UserDatasql.GetUser();
        }
    }
}
