using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;

namespace UserDataLayer
{
    public class ApplicationUserWrapper
    {
        public ApplicationUserWrapper()
        {

        }

        public ApplicationUserWrapper(ApplicationUser user)
        {
            this.Id = user.Id;
            this.LoginWrappers = user.Logins.Select(x => new IdentityUserLoginWrapper(x)).ToList();
            this.RoleWrappers = user.Roles.Select(x => new IdentityUserRoleWrapper(x)).ToList();
            this.AccessFailedCount = user.AccessFailedCount;
            this.IdentityUserClaimWrappers = user.Claims.Select(x => new IdentityUserClaimWrapper(x)).ToList();
            this.Email = user.Email;
            this.EmailConfirmed = user.EmailConfirmed;
            this.LockoutEnabled = user.LockoutEnabled;
            this.LockoutEndDateUtc = user.LockoutEndDateUtc;
            this.PasswordHash = user.PasswordHash;
            this.PhoneNumber = user.PhoneNumber;
            this.PhoneNumberConfirmed = user.PhoneNumberConfirmed;
            this.SecurityStamp = user.SecurityStamp;
            this.UserName = user.UserName;
            this.TwoFactorEnabled = user.TwoFactorEnabled;
        }

        public string Id { get; set; }
        public List<IdentityUserLoginWrapper> LoginWrappers { get; set; }
        public List<IdentityUserRoleWrapper> RoleWrappers { get; set; }
        public int AccessFailedCount { get; set; }
        public List<IdentityUserClaimWrapper> IdentityUserClaimWrappers { get; set; } 
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool LockoutEnabled { get; set; }
        public DateTime? LockoutEndDateUtc { get; set; }
        public string PasswordHash { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public string SecurityStamp { get; set; }
        public string UserName { get; set; }
        public bool TwoFactorEnabled { get; set; }

        public ApplicationUser Convert()
        {
            var applicationUser = new ApplicationUser();
            applicationUser.Id = this.Id;

            foreach (var login in this.LoginWrappers)
            {
                applicationUser.Logins.Add(login.Convert());
            }

            foreach (var role in this.RoleWrappers)
            {
                applicationUser.Roles.Add(role.Convert());
            }

            applicationUser.AccessFailedCount = this.AccessFailedCount;

            foreach (var claim in this.IdentityUserClaimWrappers)
            {
                applicationUser.Claims.Add(claim.Convert());
            }

            applicationUser.Email = this.Email;
            applicationUser.EmailConfirmed = this.EmailConfirmed;
            applicationUser.LockoutEnabled = this.LockoutEnabled;
            applicationUser.LockoutEndDateUtc = this.LockoutEndDateUtc;
            applicationUser.PasswordHash = this.PasswordHash;
            applicationUser.PhoneNumber = this.PhoneNumber;
            applicationUser.PhoneNumberConfirmed = this.PhoneNumberConfirmed;
            applicationUser.SecurityStamp = this.SecurityStamp;
            applicationUser.UserName = this.UserName;
            applicationUser.TwoFactorEnabled = this.TwoFactorEnabled;

            return applicationUser;
        }
    }
}
