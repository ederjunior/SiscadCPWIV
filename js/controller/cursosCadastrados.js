/**
 * Created by Eder on 31/03/2017.
 */
angular.module("siscadcpwiv").controller("cursosCadastrados", function ($scope, sistemaAcademico, $location) {
    $scope.listaCursos = [];

    $scope.pg = 1;
    $scope.qnt = 10;

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

    $scope.Proximo = function(pg,qnt){

            $scope.pg++;
            return listarCursos($scope.pg,$scope.qnt);

    };

    $scope.Anterior = function(pg,qnt){
            if($scope.pg>1){
                $scope.pg--;
            }
            return listarCursos($scope.pg,$scope.qnt);

    };

    var listarCursos = function(pg,qnt){
        // Callback de Sucesso
        var sucesso = function(dados){
            if(dados.data.length==0){
                $scope.pg--;
            }else {
                $scope.listaCursos = dados.data;
            }
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarCursos(pg,qnt).then(sucesso,erro);
    };

    listarCursos($scope.pg,$scope.qnt);

});