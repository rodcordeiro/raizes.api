-- -- --------------------------------------------------------------
-- -- CATEGORIAS
-- INSERT INTO tb_categorias(nome)
-- SELECT A.categoria as nome

--   FROM icnt_categoria_linha A;
-- -- --------------------------------------------------------------
-- -- LINHAS
-- INSERT INTO tb_linhas(nome,categoria)
-- SELECT A.linha as nome,
--        A.categoria 
--   FROM icnt_linha A
-- -- ----------------------------------------------------------

-- ----------------------------------------------------------------
-- -- FORCED ROLLBACK 
-- drop table tb_user;
-- drop table tb_giras_linhas;
-- drop table tb_linhas;
-- drop table tb_giras;
-- drop table tb_categorias;
-- drop table tb_migrations;
-- ----------------------------------------------------------------







