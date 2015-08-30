namespace UserDataLayer
{
    using Microsoft.AspNet.Identity.EntityFramework;

    public class IdentityUserRoleWrapper
    {
        public IdentityUserRoleWrapper()
        {
        }

        public IdentityUserRoleWrapper(IdentityUserRole role)
        {
            this.RoleId = role.RoleId;
            this.UserId = role.UserId;
        }

        public string RoleId { get; set; }
        public string UserId { get; set; }

        public IdentityUserRole Convert()
        {
            var role = new IdentityUserRole();
            role.RoleId = this.RoleId;
            role.UserId = this.UserId;

            return role;
        }
    }
}
