using Microsoft.AspNet.Identity.EntityFramework;

namespace UserDataLayer
{
    public class IdentityUserLoginWrapper
    {
        public IdentityUserLoginWrapper()
        {
        }

        public IdentityUserLoginWrapper(IdentityUserLogin login)
        {
            this.UserId = login.UserId;
            this.LoginProvider = login.LoginProvider;
            this.ProviderKey = login.ProviderKey;
        }

        public string UserId { get; set; }
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set; }

        public IdentityUserLogin Convert()
        {
            var login = new IdentityUserLogin();
            login.UserId = this.UserId;
            login.LoginProvider = this.LoginProvider;
            login.ProviderKey = this.ProviderKey;

            return login;
        }
    }
}
