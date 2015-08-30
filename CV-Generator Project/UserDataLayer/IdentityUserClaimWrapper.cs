using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserDataLayer
{
    public class IdentityUserClaimWrapper
    {
        public IdentityUserClaimWrapper()
        {
        }

        public IdentityUserClaimWrapper(IdentityUserClaim userClaim)
        {
            this.Id = userClaim.Id;
            this.UserId = userClaim.UserId;
            this.ClaimValue = userClaim.ClaimValue;
            this.ClaimType = userClaim.ClaimType;
        }

        public int Id { get; set; }
        public string UserId { get; set; }
        public string ClaimValue { get; set; }
        public string ClaimType { get; set; }

        public IdentityUserClaim Convert()
        {
            var userClaim = new IdentityUserClaim();
            userClaim.Id = this.Id;
            userClaim.UserId = this.UserId;
            userClaim.ClaimValue = this.ClaimValue;
            userClaim.ClaimType = this.ClaimType;

            return userClaim;
        }
    }
}
