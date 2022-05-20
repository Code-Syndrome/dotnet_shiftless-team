using ASP.NET_Web_Api.Data.Models;
using System.Collections.Generic;

namespace ASP.NET_Web_Api.Data
{
    public interface IUserDataSql
    {
        public int DeleteUserByUsername(string username);
        public int AddUser(User user);
        public int UpdataUser(User user, string username);
        public User GetUserByUsername(string username);
        public List<User> GetUser();

    }
}
