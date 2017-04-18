/**
 * Created by Eder on 31/03/2017.
 */
angular.module("siscadcpwiv").controller("alunosCadastrados", function ($scope, sistemaAcademico, $location) {
    $scope.listaAlunos = [];
    $scope.listaCursos = [];

    $scope.boolean = true;

    $scope.pg = 1;
    $scope.qnt = 10;

    $scope.selected=0;

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

    // Proximo e Anterior ---------------------------------------------------------------------------------------------

    $scope.Proximo = function(pg,qnt){
        if($scope.boolean==true){
            $scope.pg++;
            return listarAlunos($scope.pg,$scope.qnt);
        }

    };

    $scope.Anterior = function(pg,qnt){
        if($scope.boolean==true){
            if($scope.pg>1){
                $scope.pg--;
            }
            return listarAlunos($scope.pg,$scope.qnt);
        }

    };

    //------------------------------------------------------------------------------------------------------------------

    $scope.carregarAlunos = function(id){

        if(id==0){
            $scope.boolean = true;
            return listarAlunos($scope.pg,$scope.qnt);
        }
        $scope.boolean = false;

        var sucesso = function(dados){
            $scope.listaAlunos = dados.data;
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarAlunoPorIdCurso(id).then(sucesso,erro);
    };

    var listarAlunos = function(pg,qnt){
        // Callback de Sucesso
        var sucesso = function(dados){
            if(dados.data.length==0){
                $scope.pg--;
            }else {
                $scope.listaAlunos = dados.data;
            }

        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarAlunos(pg,qnt).then(sucesso,erro);
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


    listarAlunos($scope.pg,$scope.qnt);
    listarCursos();

});