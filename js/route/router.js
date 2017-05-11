/**
 * Created by Eder on 31/03/2017.
 */
angular.module("siscadcpwiv")
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider.when("/", {
            templateUrl: "view/home.html",
            controller: "homeController"
        });

        $routeProvider.when("/cursosCadastrados", {
            templateUrl: "view/cursos-cadastrados.html",
            controller:"cursosCadastrados"

        });

        $routeProvider.when("/disciplinasCadastradas", {
            templateUrl: "view/disciplinas-cadastradas.html",
            controller: "disciplinasCadastradas"
        });

        $routeProvider.when("/alunosCadastrados", {
            templateUrl: "view/alunos-cadastrados.html",
            controller: "alunosCadastrados"
        });

        $routeProvider.when("/cadastroDeAluno", {
            templateUrl: "view/cadastro-de-aluno.html",
            controller: "cadastroAlunoController"

        });

        $routeProvider.when("/cadastroDeDisciplina", {
            templateUrl: "view/cadastro-de-disciplina.html",
            controller: "cadastroDisciplinaController"

        });

        $routeProvider.when("/cadastroDeCurso", {
            templateUrl: "view/cadastro-de-curso.html",
            controller : "cadastroCursoController"

        });

        $routeProvider.when("/matricula", {
            templateUrl: "view/matricula.html",
            controller : "matriculaController"

        });

    }]);