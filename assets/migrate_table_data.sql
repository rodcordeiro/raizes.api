-- ----------------------------------------------------------------
-- -- CATEGORIAS
-- INSERT INTO tb_categorias(name)
-- SELECT A.categoria as name
--   FROM icnt_categoria_linha A;
-- ----------------------------------------------------------------
-- -- LINHAS
-- INSERT INTO tb_linhas(name,category)
-- SELECT A.linha as name,
--        A.categoria as category
--   FROM icnt_linha A
-- ----------------------------------------------------------------


-- ----------------------------------------------------------------
-- -- FORCED ROLLBACK 
-- drop table tb_user;
-- drop table tb_linhas;
-- drop table tb_categorias;
-- drop table tb_migrations;
-- ----------------------------------------------------------------







