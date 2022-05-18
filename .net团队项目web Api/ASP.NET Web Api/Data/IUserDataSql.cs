namespace ASP.NET_Web_Api.Data
{
    public interface IUserDataSql
    {
        public string SelectLoginUser(string usrname);
        public void UpdataLoginUser(string LoginUserNow);
        public void AddLoginUser(string LoginUserNow);
        public void DeleteLoginUser(string username);

    }
}
