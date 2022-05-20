using ASP.NET_Web_Api.Data.Models;

namespace ASP.NET_Web_Api.Controllers.Models
{
    public class UpdateResultUserViewModel
    {
        public User user { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }
    }
}
