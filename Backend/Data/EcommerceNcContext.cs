using System;
using System.Collections.Generic;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public partial class EcommerceNcContext : DbContext
{
    public EcommerceNcContext()
    {
    }

    public EcommerceNcContext(DbContextOptions<EcommerceNcContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<ContactForm> ContactForms { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<SubCategory> SubCategories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__Category__19093A0B9714BE49");

            entity.ToTable("Category");

            entity.Property(e => e.CategoryId).ValueGeneratedNever();
            entity.Property(e => e.CategoryName).IsUnicode(false);
        });

        modelBuilder.Entity<ContactForm>(entity =>
        {
            entity.HasKey(e => e.ContactFormId).HasName("PK__ContactF__88BB5D8991430022");

            entity.ToTable("ContactForm");

            entity.Property(e => e.ContactFormId).ValueGeneratedNever();
            entity.Property(e => e.ContactMessage).IsUnicode(false);
            entity.Property(e => e.ContactName).IsUnicode(false);
            entity.Property(e => e.Email).IsUnicode(false);
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__Product__B40CC6CDDFDB289C");

            entity.ToTable("Product");

            entity.Property(e => e.ProductId).ValueGeneratedNever();
            entity.Property(e => e.Activity).IsUnicode(false);
            entity.Property(e => e.Category).IsUnicode(false);
            entity.Property(e => e.Color).IsUnicode(false);
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.Image).IsUnicode(false);
            entity.Property(e => e.ProductName).IsUnicode(false);
            entity.Property(e => e.Size).IsUnicode(false);
        });

        modelBuilder.Entity<SubCategory>(entity =>
        {
            entity.HasKey(e => e.SubCategoryId).HasName("PK__SubCateg__26BE5B19A4D3A7ED");

            entity.ToTable("SubCategory");

            entity.Property(e => e.SubCategoryId).ValueGeneratedNever();
            entity.Property(e => e.SubCategoryName).IsUnicode(false);

            entity.HasOne(d => d.Category).WithMany(p => p.SubCategories)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK__SubCatego__Categ__3B75D760");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
