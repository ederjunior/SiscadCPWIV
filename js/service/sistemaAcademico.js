/**
 * Created by Eder on 31/03/2017.
 */
angular.module("siscadcpwiv").factory("sistemaAcademico",
    function($http) {

        var _listarCursos = function (pg,qnt) {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/curso/list/"+pg+"/"+qnt
            });
        };

        var _listarDisciplinas = function (pg,qnt) {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+pg+"/"+qnt
            });
        };

        var _listarAlunos = function (pg,qnt) {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+pg+"/"+qnt
            });
        };

        var _listarSemestres = function () {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/semestre/list"
            });
        };

        var _listarAlunosPorIdCurso = function (id) {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/aluno/curso/"+id
            });
        };

        var _listarDisciplinasPorIdCurso = function (id) {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id
            });
        };

        var _listarMatriculasPorIdSemestreIdDisciplina = function (idSemestre,idDisciplina) {
            return $http({
                method: "GET",
                url: " http://siscadcpwiv.herokuapp.com/matricula/semestre/disciplina/"+idSemestre+"/"+idDisciplina
            });
        };

        var _cadastrarAluno = function (aluno) {
            return $http({
                method: "POST",
                url: "http://siscadcpwiv.herokuapp.com/aluno/",
                data: aluno
            });
        };

        var _cadastrarCurso = function (curso) {
            return $http({
                method: "POST",
                url: "http://siscadcpwiv.herokuapp.com/curso/",
                data: curso
            });
        };

        var _cadastrarDisciplina = function (disciplina) {
            return $http({
                method: "POST",
                url: "http://siscadcpwiv.herokuapp.com/disciplina/",
                data: disciplina
            });
        };

        var _matricular = function (matricula) {
            return $http({
                method: "POST",
                url: "http://siscadcpwiv.herokuapp.com/matricula/",
                data: matricula
            });
        };

        return {
        listarCursos : _listarCursos,
        listarDisciplinas : _listarDisciplinas,
        listarAlunos : _listarAlunos,
        listarAlunoPorIdCurso : _listarAlunosPorIdCurso,
        listarDisciplinasPorIdCurso : _listarDisciplinasPorIdCurso,
        cadastrarAluno : _cadastrarAluno,
        cadastrarCurso : _cadastrarCurso,
        cadastrarDisciplina : _cadastrarDisciplina,
        listarSemestres : _listarSemestres,
        listarMatriculasPorIdSemestreIdDisciplina : _listarMatriculasPorIdSemestreIdDisciplina,
        matricular : _matricular
        }
    });