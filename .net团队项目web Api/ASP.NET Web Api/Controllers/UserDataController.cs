using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ASP.NET_Web_Api.Data;
using ASP.NET_Web_Api.Data.Models;
using System.Collections.Generic;
using ASP.NET_Web_Api.Controllers.Models;

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


        [HttpPost]
        public int AddUser([FromBody] User User)
        {
            return UserDatasql.AddUser(User);
        }


        [HttpDelete("{username}")]
        public ActionResult<int> DeleteUserByUsername(string username)
        {
            return UserDatasql.DeleteUserByUsername(username);
        }

        [HttpPut]
        public ActionResult<UpdateResultUserViewModel>
            UpdataUser([FromBody] UpdateUserViewModel updateViewModel)
        {
            if (!ModelState.IsValid)
            {
                return new UpdateResultUserViewModel()
                {
                    user = null,
                    StatusCode = 2,
                    Message = "model is invalid !"
                };
            }
            else
            {
                int update = UserDatasql.UpdataUser(updateViewModel.Target, updateViewModel.Username);
                return new UpdateResultUserViewModel()
                {
                    user = updateViewModel.Target,
                    StatusCode = 0,
                    Message = "User update success !"
                };
            }
        }

        [HttpGet("{username}")]
        public User GetUserByUsername(string username)
        {
            return UserDatasql.GetUserByUsername(username);
        }

        [HttpGet]
        public List<User> GetUser()
        {
            return UserDatasql.GetUser();
        }
    }
}
