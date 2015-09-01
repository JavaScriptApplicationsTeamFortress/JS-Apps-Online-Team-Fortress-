namespace UserDataLayer
{
    using Microsoft.AspNet.Identity;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Security.Claims;
    using DatabaseLayer;
    using Microsoft.AspNet.Identity.EntityFramework;

    public class STSdbUserStorage : IUserStore<ApplicationUser>, IUserLoginStore<ApplicationUser, string>,
    IUserClaimStore<ApplicationUser, string>, IUserRoleStore<ApplicationUser, string>, IUserPasswordStore<ApplicationUser, string>,
    IUserSecurityStampStore<ApplicationUser, string>, IQueryableUserStore<ApplicationUser, string>,
    IUserEmailStore<ApplicationUser, string>, IUserPhoneNumberStore<ApplicationUser, string>,
    IUserTwoFactorStore<ApplicationUser, string>, IUserLockoutStore<ApplicationUser, string>,
    IUserStore<ApplicationUser, string>
    {
        public readonly Table<string, ApplicationUserWrapper> Table;

        public STSdbUserStorage(Table<string, ApplicationUserWrapper> table)
        {
            if (table == null)
            {
                throw new NotImplementedException("table");
            }

            this.Table = table;
        }

        public IQueryable<ApplicationUser> Users
        {
            get
            {
                return this.Table.Select(x => x.Value.Convert()).AsQueryable();
            }
        }

        public Task AddClaimAsync(ApplicationUser user, Claim claim)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                var identityUserClaim = new IdentityUserClaim()
                {
                    ClaimValue = claim.Value,
                    ClaimType = claim.Type,
                    UserId = user.Id
                };

                user.Claims.Add(identityUserClaim);

                var userWrapper = this.Table[user.Id];
                userWrapper.IdentityUserClaimWrappers.Add(new IdentityUserClaimWrapper(identityUserClaim));
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task AddLoginAsync(ApplicationUser user, UserLoginInfo login)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                var identityUserLogin = new IdentityUserLogin()
                {
                    LoginProvider = login.LoginProvider,
                    ProviderKey = login.ProviderKey,
                    UserId = user.Id
                };

                user.Logins.Add(identityUserLogin);

                var userWrapper = this.Table[user.Id];
                userWrapper.LoginWrappers.Add(new IdentityUserLoginWrapper(identityUserLogin));
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task AddToRoleAsync(ApplicationUser user, string roleName)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                var identityUserRole = new IdentityUserRole() { RoleId = roleName, UserId = user.Id };

                user.Roles.Add(identityUserRole);

                var userWrapper = this.Table[user.Id];
                userWrapper.RoleWrappers.Add(new IdentityUserRoleWrapper(identityUserRole));
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task CreateAsync(ApplicationUser user)
        {
            return Task.Factory.StartNew(() =>
            {
                if (!this.Table.Contains(user.Id))
                {
                    this.Table.Insert(user.Id, new ApplicationUserWrapper(user));
                }
            });
        }

        public Task DeleteAsync(ApplicationUser user)
        {
            return Task.Factory.StartNew(() =>
            {
                this.Table.Remove(user.Id);
            });
        }

        public void Dispose()
        {
        }

        public Task<ApplicationUser> FindAsync(UserLoginInfo login)
        {
            return Task<ApplicationUser>.Factory.StartNew(() =>
            {
                foreach (var kv in this.Table)
                {
                    var user = kv.Value;

                    foreach (var loginWrapper in user.LoginWrappers)
                    {
                        if (loginWrapper.LoginProvider == login.LoginProvider &&
                            loginWrapper.ProviderKey == login.ProviderKey)
                        {
                            return user.Convert();
                        }
                    }
                }

                return null;
            });
        }

        public Task<ApplicationUser> FindByEmailAsync(string email)
        {
            return Task<ApplicationUser>.Factory.StartNew(() =>
            {
                foreach (var kv in this.Table)
                {
                    var user = kv.Value;

                    if (user.Email == email)
                    {
                        return user.Convert();
                    }
                }

                return null;
            });
        }

        public Task<ApplicationUser> FindByIdAsync(string userId)
        {
            return Task<ApplicationUser>.Factory.StartNew(() =>
            {
                foreach (var kv in this.Table)
                {
                    var user = kv.Value;

                    if (user.Id == userId)
                    {
                        return user.Convert();
                    }
                }

                return null;
            });
        }

        public Task<ApplicationUser> FindByNameAsync(string userName)
        {
            return Task<ApplicationUser>.Factory.StartNew((state) =>
            {
                foreach (var kv in this.Table)
                {
                    var user = kv.Value;

                    if (user.UserName.ToLower().Contains(((string)state).ToLower()))
                    {
                        return user.Convert();
                    }
                }

                return null;

            }, userName); ;
        }

        public Task<int> GetAccessFailedCountAsync(ApplicationUser user)
        {
            return Task<int>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].AccessFailedCount;
            });
        }

        public Task<IList<Claim>> GetClaimsAsync(ApplicationUser user)
        {
            return Task<IList<Claim>>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].IdentityUserClaimWrappers.Select(
                        x => new Claim(x.ClaimValue, x.ClaimType)).ToList();
            });
        }

        public Task<string> GetEmailAsync(ApplicationUser user)
        {
            return Task<string>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].Email;
            });
        }

        public Task<bool> GetEmailConfirmedAsync(ApplicationUser user)
        {
            return Task<bool>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].EmailConfirmed;
            });
        }

        public Task<bool> GetLockoutEnabledAsync(ApplicationUser user)
        {
            return Task<bool>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].LockoutEnabled;
            });
        }

        public Task<DateTimeOffset> GetLockoutEndDateAsync(ApplicationUser user)
        {
            return Task<DateTimeOffset>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                var dateTime = DateTime.Now.AddHours(-2);
                var lockoutEndDateUtc = this.Table[user.Id].LockoutEndDateUtc;

                if (lockoutEndDateUtc != null)
                {
                    dateTime = lockoutEndDateUtc.Value;
                }

                return new DateTimeOffset(dateTime);
            });
        }

        public Task<IList<UserLoginInfo>> GetLoginsAsync(ApplicationUser user)
        {
            return Task<IList<UserLoginInfo>>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].LoginWrappers
                    .Select(x => new UserLoginInfo(x.LoginProvider, x.ProviderKey))
                    .ToList();
            });
        }

        public Task<string> GetPasswordHashAsync(ApplicationUser user)
        {
            return Task<string>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].PasswordHash;
            });
        }

        public Task<string> GetPhoneNumberAsync(ApplicationUser user)
        {
            return Task<string>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].PhoneNumber;
            });
        }

        public Task<bool> GetPhoneNumberConfirmedAsync(ApplicationUser user)
        {
            return Task<bool>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].PhoneNumberConfirmed;
            });
        }

        public Task<IList<string>> GetRolesAsync(ApplicationUser user)
        {
            return Task<IList<string>>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].RoleWrappers.Select(x => x.RoleId).ToList();
            });
        }

        public Task<string> GetSecurityStampAsync(ApplicationUser user)
        {
            return Task<string>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].SecurityStamp;
            });
        }

        public Task<bool> GetTwoFactorEnabledAsync(ApplicationUser user)
        {
            return Task<bool>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].TwoFactorEnabled;
            });
        }

        public Task<bool> HasPasswordAsync(ApplicationUser user)
        {
            return Task<bool>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].PasswordHash != null;
            });
        }

        public Task<int> IncrementAccessFailedCountAsync(ApplicationUser user)
        {
            return Task<int>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.AccessFailedCount++;
                var userWrapper = this.Table[user.Id];
                userWrapper.AccessFailedCount++;
                this.Table[user.Id] = userWrapper;

                return userWrapper.AccessFailedCount;
            });
        }

        public Task<bool> IsInRoleAsync(ApplicationUser user, string roleName)
        {
            return Task<bool>.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                return this.Table[user.Id].RoleWrappers.Exists(x => x.RoleId == roleName);
            });
        }

        public Task RemoveClaimAsync(ApplicationUser user, Claim claim)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                var claimForRemove = user.Claims.FirstOrDefault(x => x.ClaimType == claim.Type && x.ClaimValue == claim.Value);

                if (claimForRemove != null)
                {
                    user.Claims.Remove(claimForRemove);
                }

                var userWrapper = this.Table[user.Id];
                userWrapper.IdentityUserClaimWrappers.RemoveAll(
                    x => x.ClaimValue == claim.Value && x.ClaimType == claim.Type);

                Table[user.Id] = userWrapper;
            });
        }

        public Task RemoveFromRoleAsync(ApplicationUser user, string roleName)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                var roleForRemove = user.Roles.FirstOrDefault(x => x.RoleId == roleName);

                if (roleForRemove != null)
                {
                    user.Roles.Remove(roleForRemove);
                }

                var userWrapper = this.Table[user.Id];
                userWrapper.RoleWrappers.RemoveAll(
                    x => x.RoleId == roleName);

                this.Table[user.Id] = userWrapper;
            });
        }

        public Task RemoveLoginAsync(ApplicationUser user, UserLoginInfo login)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                var loginForRemove = user.Logins.FirstOrDefault(x => x.LoginProvider == login.LoginProvider && x.ProviderKey == login.ProviderKey);

                if (loginForRemove != null)
                {
                    user.Logins.Remove(loginForRemove);
                }

                var userWrapper = this.Table[user.Id];
                userWrapper.LoginWrappers.RemoveAll(x => x.LoginProvider == login.LoginProvider && x.ProviderKey == login.ProviderKey);

                this.Table[user.Id] = userWrapper;
            });
        }

        public Task ResetAccessFailedCountAsync(ApplicationUser user)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.AccessFailedCount = 0;
                var userWrapper = this.Table[user.Id];
                userWrapper.AccessFailedCount = 0;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetEmailAsync(ApplicationUser user, string email)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.Email = email;
                var userWrapper = this.Table[user.Id];
                userWrapper.Email = email;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetEmailConfirmedAsync(ApplicationUser user, bool confirmed)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.EmailConfirmed = confirmed;
                var userWrapper = this.Table[user.Id];
                userWrapper.EmailConfirmed = confirmed;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetLockoutEnabledAsync(ApplicationUser user, bool enabled)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.LockoutEnabled = enabled;
                var userWrapper = this.Table[user.Id];
                userWrapper.LockoutEnabled = enabled;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetLockoutEndDateAsync(ApplicationUser user, DateTimeOffset lockoutEnd)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.LockoutEndDateUtc = lockoutEnd.DateTime;
                var userWrapper = this.Table[user.Id];
                userWrapper.LockoutEndDateUtc = lockoutEnd.DateTime;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetPasswordHashAsync(ApplicationUser user, string passwordHash)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.PasswordHash = passwordHash;
                var userWrapper = this.Table[user.Id];
                userWrapper.PasswordHash = passwordHash;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetPhoneNumberAsync(ApplicationUser user, string phoneNumber)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.PhoneNumber = phoneNumber;
                var userWrapper = this.Table[user.Id];
                userWrapper.PhoneNumber = phoneNumber;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetPhoneNumberConfirmedAsync(ApplicationUser user, bool confirmed)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.PhoneNumberConfirmed = confirmed;
                var userWrapper = this.Table[user.Id];
                userWrapper.PhoneNumberConfirmed = confirmed;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetSecurityStampAsync(ApplicationUser user, string stamp)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.SecurityStamp = stamp;
                var userWrapper = this.Table[user.Id];
                userWrapper.SecurityStamp = stamp;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task SetTwoFactorEnabledAsync(ApplicationUser user, bool enabled)
        {
            return Task.Factory.StartNew(() =>
            {
                this.CreateUserIfDoesnotExist(user);

                user.TwoFactorEnabled = enabled;
                var userWrapper = this.Table[user.Id];
                userWrapper.TwoFactorEnabled = enabled;
                this.Table[user.Id] = userWrapper;
            });
        }

        public Task UpdateAsync(ApplicationUser user)
        {
            return Task.Factory.StartNew(() =>
            {
                Table[user.Id] = new ApplicationUserWrapper(user);
            });
        }

        private void CreateUserIfDoesnotExist(ApplicationUser user)
        {
            if (!this.Table.Contains(user.Id))
            {
                this.Table.Insert(user.Id, new ApplicationUserWrapper(user));
            }
        }
    }
}
