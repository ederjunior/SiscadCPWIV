/**
 * Created by Eder on 31/03/2017.
 */
angular.module("siscadcpwiv").controller("homeController", function ($scope, sistemaAcademico, $location) {
    $scope.listaCursos = {};

    $scope.listaDisciplinas = {};

    $scope.listaAlunos = {};

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

    var listarCursos = function(){
        // Callback de Sucesso
        var sucesso = function(dados){
            $scope.listaCursos = dados.data.length;
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarCursos(1,500).then(sucesso,erro);
    };

    var listarDisciplinas = function(){
        // Callback de Sucesso
        var sucesso = function(dados){
            $scope.listaDisciplinas = dados.data.length;
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarDisciplinas(1,1000).then(sucesso,erro);
    };

    var listarAlunos = function(){
        // Callback de Sucesso
        var sucesso = function(dados){
            $scope.listaAlunos = dados.data.length;
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarAlunos(1,1000).then(sucesso,erro);
    };

    listarCursos();
    listarDisciplinas();
    listarAlunos();

});