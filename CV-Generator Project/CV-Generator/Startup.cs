using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CV_Generator.Startup))]
namespace CV_Generator
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
