export default {
  printWidth: 120,
  tabWidth: 2,
  trailingComma: "all",
  semi: true,
  importOrder: ["^@/app/(.*)$", "^@/components/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
