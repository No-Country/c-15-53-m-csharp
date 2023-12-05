using System;
using System.Collections.Generic;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public partial class BasicPointDbContext : DbContext
{
    public BasicPointDbContext(DbContextOptions<BasicPointDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<ContactForm> ContactForms { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<SubCategory> SubCategories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__Category__D54EE9B46B42F272");

            entity.ToTable("Category");

            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("category_name");
        });

        modelBuilder.Entity<ContactForm>(entity =>
        {
            entity.HasKey(e => e.ContactFormId).HasName("PK__ContactF__C8065F59EA7AD7F2");

            entity.ToTable("ContactForm");

            entity.Property(e => e.ContactFormId).HasColumnName("contact_form_id");
            entity.Property(e => e.ContactMessage)
                .HasColumnType("text")
                .HasColumnName("contact_message");
            entity.Property(e => e.ContactName)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("contact_name");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__Product__47027DF565CF782D");

            entity.ToTable("Product");

            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.Activity)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("activity");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.Color)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("color");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Image)
                .HasColumnType("text")
                .HasColumnName("image");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.ProductName)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("product_name");
            entity.Property(e => e.Size)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("size");
            entity.Property(e => e.Stock).HasColumnName("stock");
            entity.Property(e => e.SubCategoryId).HasColumnName("sub_category_id");

            entity.HasOne(d => d.Category).WithMany(p => p.Products)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK__Product__categor__3B75D760");

            entity.HasOne(d => d.SubCategory).WithMany(p => p.Products)
                .HasForeignKey(d => d.SubCategoryId)
                .HasConstraintName("FK__Product__sub_cat__3C69FB99");
        });

        modelBuilder.Entity<SubCategory>(entity =>
        {
            entity.HasKey(e => e.SubCategoryId).HasName("PK__SubCateg__0A556D5FFDB2DB75");

            entity.ToTable("SubCategory");

            entity.Property(e => e.SubCategoryId).HasColumnName("sub_category_id");
            entity.Property(e => e.SubCategoryName)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("sub_category_name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
