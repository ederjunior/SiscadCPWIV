/**
 * Created by Eder on 17/04/2017.
 */
angular.module("siscadcpwiv")
    .controller("cadastroDisciplinaController", function ($scope, sistemaAcademico, $location) {

        $scope.listaCursos = [];

        $scope.cadastrarDisciplina = function(disciplina) {
            sistemaAcademico.cadastrarDisciplina(disciplina).then(function(dados){
                alert("Disciplina cadastrada com sucesso!");
                $location.url("/disciplinasCadastradas");

            },function(err){
                alert("nâo saber "+err);
            });
        };

        var listarCursos = function(){
            // Callback de Sucesso
            var sucesso = function(dados){
                $scope.listaCursos = dados.data;
            };

            // Callback de erro
            var erro = function(err){
                alert("Erro "+err);
            };

            sistemaAcademico.listarCursos(1,500).then(sucesso,erro);
        };

        listarCursos();

    });