/**
 * Created by Eder on 26/04/2017.
 */
angular.module("siscadcpwiv").controller("matriculaController", function ($scope, sistemaAcademico, $location,$window) {

    $scope.listaCursos = [];
    $scope.listaDisciplinas = [];
    $scope.listaAlunos = [];
    $scope.listaSemestres = [];
    $scope.listaMatriculas = [];

    $scope.listaParaMatricularIntermediario = [];
    $scope.listaParaMatricular = [];

    var listaMatricularPronta = [];


    $scope.passarIntermediario = function(aluno){
        var posicao = $scope.listaParaMatricularIntermediario.indexOf(aluno);

        if(posicao>-1){
            $scope.listaParaMatricularIntermediario.splice(posicao,1);
        }else{
            $scope.listaParaMatricularIntermediario.push(aluno);
        }

    };

    $scope.passar = function(){
        $scope.listaParaMatricular = $scope.listaParaMatricularIntermediario.slice();
    };

    $scope.matricular = function(idDisciplina,idSemestre) {

        for (var i=0; i < $scope.listaParaMatricular.length;i++){
            alert($scope.listaParaMatricular[i].id);
            alert(idDisciplina);
            alert(idSemestre);
            var ref ={};
            ref.AlunoId = $scope.listaParaMatricular[i].id;
            ref.DisciplinaId = idDisciplina;
            ref.SemestreId = idSemestre;
            listaMatricularPronta.push(ref);

        }

        sistemaAcademico.matricular(listaMatricularPronta).then(function(dados){
            alert("Matricula realizada com sucesso!");
            $scope.carregarMatriculas(idSemestre,idDisciplina);
            $scope.listaParaMatricular = [];


        },function(err){
            alert("nâo saber "+err);
        });
    };

    $scope.carregarAlunosESemestres = function(id){

        if(id>=1){

            var sucessoAluno = function (dados) {
                $scope.listaAlunos = dados.data;
            };

            var sucessoSemestre = function (dados) {
                $scope.listaSemestres = dados.data;
            };

            // Callback de erro
            var erro = function (err) {
                alert("Erro " + err);
            };

            sistemaAcademico.listarAlunoPorIdCurso(id).then(sucessoAluno, erro);
            sistemaAcademico.listarSemestres().then(sucessoSemestre, erro);

        }else{

            $scope.listaSemestres = [];
            $scope.listaAlunos = [];
        }

    };

    $scope.carregarDisciplina = function(id) {

        if(id>=1){
            var sucesso = function (dados) {
                $scope.listaDisciplinas = dados.data;
            };

            // Callback de erro
            var erro = function (err) {
                alert("Erro " + err);
            };

            sistemaAcademico.listarDisciplinasPorIdCurso(id).then(sucesso, erro);
        }else{
            $scope.listaAlunos = [];
            $scope.listaSemestres = [];
            $scope.listaDisciplinas = [];
        }
    };

    $scope.carregarMatriculas = function(idSemestre,idDisciplina) {

        if(idSemestre>=1 && idDisciplina>=1){
            var sucesso = function (dados) {
                $scope.listaMatriculas = dados.data;
            };

            // Callback de erro
            var erro = function (err) {
                alert("Erro " + err);
            };

            sistemaAcademico.listarMatriculasPorIdSemestreIdDisciplina(idSemestre,idDisciplina).then(sucesso, erro);
        }else{
            $scope.listaMatriculas = [];
        }
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

    var listarDisciplinas = function(){
        // Callback de Sucesso
        var sucesso = function(dados){
            $scope.listaDisciplinas = dados.data;
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        sistemaAcademico.listarDisciplinas(1,1000).then(sucesso,erro);
    };


    listarCursos();


});