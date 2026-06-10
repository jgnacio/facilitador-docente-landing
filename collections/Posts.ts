import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: { en: "Post", es: "Artículo" },
    plural: { en: "Posts", es: "Artículos" },
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status", "publishedAt"],
    group: { en: "Blog", es: "Blog" },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: { en: "Title", es: "Título" },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      label: { en: "Slug", es: "Slug" },
      admin: {
        description: {
          en: "Post URL. E.g: how-to-plan-with-ebi",
          es: "URL del artículo. Ej: como-planificar-con-ebi",
        },
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      label: { en: "Excerpt", es: "Resumen" },
      admin: {
        description: {
          en: "Short summary for listings and SEO (max 160 chars)",
          es: "Resumen corto para listados y SEO (máx 160 chars)",
        },
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      label: { en: "Cover image", es: "Imagen de portada" },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: { en: "Content", es: "Contenido" },
    },
    {
      name: "status",
      type: "select",
      label: { en: "Status", es: "Estado" },
      options: [
        { label: { en: "Draft", es: "Borrador" }, value: "draft" },
        { label: { en: "Published", es: "Publicado" }, value: "published" },
      ],
      defaultValue: "draft",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      label: { en: "Published at", es: "Fecha de publicación" },
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      label: { en: "Author", es: "Autor" },
      admin: {
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
};
