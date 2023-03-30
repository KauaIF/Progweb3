aux = 0
        
        AVAluno = document.createElement("div");
        AVAluno.style.width = "95vw";
        AVAluno.style.height = "85vh";
        AVAluno.style.margin = "auto";
        //AVAluno.style.display = "none";
        AVAluno.setAttribute("id","AVA");
        AVAluno.style.backgroundColor = "rgb(170, 255, 219)";
        btnCriarAluno = document.createElement("div");
        btnCriarAluno.innerHTML = "criar aluno";
        btnCriarAluno.style.margin = "auto";
        btnCriarAluno.style.marginTop = "10px";
        btnCriarAluno.setAttribute("onclick","InserirAluno()");
        btnCriarAluno.setAttribute("class","btn");
        btnCriarAluno.setAttribute("id","btnCriarAluno");
        AVAluno.appendChild(btnCriarAluno);

        AVProfessor = document.createElement("div");
        AVProfessor.style.width = "95vw";
        AVProfessor.style.height = "85vh";
        AVProfessor.style.margin = "auto";
        AVProfessor.setAttribute("id","AVP");
        AVProfessor.style.backgroundColor = "rgb(255, 0, 0)";
        btnCriarProfessor = document.createElement("div");
        btnCriarProfessor.innerHTML = "criar professor";
        btnCriarProfessor.style.margin = "auto";
        btnCriarProfessor.style.marginTop = "10px";
        btnCriarProfessor.setAttribute("onclick","InserirProfessor()");
        btnCriarProfessor.setAttribute("class","btn");
        btnCriarProfessor.setAttribute("id","btnCriarProfessor");
        AVProfessor.appendChild(btnCriarProfessor);
        function Aluno(){
            if(aux == 2){
            aux = 0;
            const Area = document.getElementById("AVP")
            Area.remove()
            }
            if(aux == 0){
            aux = 1;
            document.body.appendChild(AVAluno);
            }
        }
        function InserirAluno(){
            const aluno = document.createElement("div");
            aluno.setAttribute("class","Lista");
            nome = prompt("nome do aluno");
            aluno.innerHTML = nome;
            document.getElementById("AVA").prepend(aluno);
        }
        function Professor(){
            if(aux == 1){
            aux = 0;
            const Area = document.getElementById("AVA")
            Area.remove()
            }
            if(aux == 0){
            aux = 2;
            document.body.appendChild(AVProfessor);
            }
        }
        function InserirProfessor(){
            const aluno = document.createElement("div");
            aluno.setAttribute("class","Lista");
            nome = prompt("nome do professor");
            aluno.innerHTML = nome;
            document.getElementById("AVP").prepend(aluno);
        }
        //poderia ter usado display mas achei interessante fazer sem