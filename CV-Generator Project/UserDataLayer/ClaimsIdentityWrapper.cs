using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace UserDataLayer
{
    public class ClaimsIdentityWrapper
    {
        public ClaimsIdentityWrapper()
        {
        }

        public ClaimsIdentityWrapper(ClaimsIdentity identity)
        {
            this.RoleClaimType = identity.RoleClaimType;
            this.ClaimsIdentityWrappers = identity.Claims.Select(x => new ClaimWrapper(x)).ToList();
            this.AuthenticationType = identity.AuthenticationType;
            this.IsAuthenticated = identity.IsAuthenticated;
            this.Label = identity.Label;
            this.Name = identity.Name;
            this.NameClaimType = identity.NameClaimType;
        }

        public string RoleClaimType { get; set; }
        public List<ClaimWrapper> ClaimsIdentityWrappers { get; set; }
        public string AuthenticationType { get; set; }
        public bool IsAuthenticated { get; set; }
        public string Label { get; set; }
        public string Name { get; set; }
        public string NameClaimType { get; set; }

        public ClaimsIdentity Convert()
        {
            var claims = ClaimsIdentityWrappers.Select(x => x.Convert()).ToList();

            ClaimsIdentity identity = new ClaimsIdentity(claims, this.AuthenticationType, this.NameClaimType, this.RoleClaimType);
            identity.Label = this.Label;

            return identity;
        }
    }
}
