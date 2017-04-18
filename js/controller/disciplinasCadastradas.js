/**
 * Created by Eder on 31/03/2017.
 */
angular.module("siscadcpwiv").controller("disciplinasCadastradas", function ($scope, sistemaAcademico, $location) {
    $scope.listaDisciplinas = [];
    $scope.listaCursos = [];

    $scope.pg = 1;
    $scope.qnt = 10;

    $scope.boolean = true;

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

    // Proximo e Anterior ---------------------------------------------------------------------------------------------

    $scope.Proximo = function(pg,qnt){
        if($scope.boolean==true){
            $scope.pg++;
            return listarDisciplinas($scope.pg,$scope.qnt);
        }

    };

    $scope.Anterior = function(pg,qnt){
        if($scope.boolean==true){
            if($scope.pg>1){
                $scope.pg--;
            }
            return listarDisciplinas($scope.pg,$scope.qnt);
        }

    };

    //------------------------------------------------------------------------------------------------------------------

    $scope.carregarDisciplinas = function(id){

        if(id==0){
            $scope.boolean = true;
            return listarDisciplinas($scope.pg,$scope.qnt);
        }
        $scope.boolean = false;

        var sucesso = function(dados){
            $scope.listaDisciplinas = dados.data;
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarDisciplinasPorIdCurso(id).then(sucesso,erro);
    };

    var listarDisciplinas = function(pg, qnt){
        // Callback de Sucesso
        var sucesso = function(dados){
            if(dados.data.length==0){
                $scope.pg--;
            }else {
                $scope.listaDisciplinas = dados.data;
            }
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarDisciplinas($scope.pg,$scope.qnt).then(sucesso,erro);
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

    listarDisciplinas($scope.pg,$scope.qnt);
    listarCursos();

});