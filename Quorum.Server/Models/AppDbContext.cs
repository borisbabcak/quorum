using Microsoft.EntityFrameworkCore;

namespace Quorum.Server.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Login> Logins { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Login>().HasNoKey();
            modelBuilder.Entity<User>().HasNoKey();
            base.OnModelCreating(modelBuilder);
        }
    }
}