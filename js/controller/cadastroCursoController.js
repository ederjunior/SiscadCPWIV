/**
 * Created by Eder on 17/04/2017.
 */
angular.module("siscadcpwiv")
    .controller("cadastroCursoController", function ($scope, sistemaAcademico, $location) {

        $scope.cadastrarCurso = function(curso) {
            sistemaAcademico.cadastrarCurso(curso).then(function(dados){
                alert("Curso cadastrado com sucesso!");
                $location.url("/cursosCadastrados");

            },function(err){
                alert("nâo saber "+err.msg);
            });
        };
    });