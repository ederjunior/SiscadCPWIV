/**
 * Created by Eder on 31/03/2017.
 */
angular.module("siscadcpwiv")
    .controller("cadastroAlunoController", function ($scope, sistemaAcademico, $location) {

        $scope.cadastrarAluno = function(aluno) {
            sistemaAcademico.cadastrarAluno(aluno).then(function(dados){
                alert("Aluno cadastrado com sucesso!");
                $location.url("/alunosCadastrados");

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