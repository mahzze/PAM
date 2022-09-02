import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

const css = StyleSheet.create(
  {

    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',  
      flexWrap: 'wrap',
      paddingHorizontal: '1.2rem',
      paddingVertical: '1rem',
      fontSize: 24
    },

    title: {
      fontWeight: 'bolder',
      marginTop: '1rem'
    },

    chapter: {
      marginTop: "2vh",
      paddingHorizontal: '1rem',
      fontWeight: "bold"
    },

    chapText: {
      fontSize: 14,
      paddingTop: '.6em',
      paddingHorizontal: '1.3em',
      maxWidth: '94vw',
      textAlign: 'justify'
    }

  }
);

export default class App extends Component {
  render() {
    return (
      <View style={css.container}>
       
        <Text style={css.title}>TÍTULO I – Das Disposições Preliminares</Text>
        <Text style={css.chapter}>CAPÍTULO I – Das Unidades de Ensino</Text>
        
        <View> 
          <Text style={css.chapter}>Artigo 1º </Text>
          <Text style={css.chapText}>
            As Escolas Técnicas Estaduais (Etecs) do Centro Estadual de Educação Tecnológica Paula Souza (CEETEPS),  
        criado pelo Decreto-Lei de 06/10/1969, reger-se-ão por este Regimento Comum, observadas, no que couber, 
        as disposições do Regimento do CEETEPS e a legislação de ensino. 
          </Text>
          <Text style={css.chapText}>
          § 1º - As presentes disposições aplicam-se:
1 - aos cursos e programas de educação profissional técnica de nível médio e
de formação inicial e continuada ou de qualificação profissional desenvolvidos
pelo CEETEPS;
2 - aos cursos e programas de educação básica, previstos neste Regimento;
3 - às Etecs que venham a integrar o CEETEPS.
§ 2º - As Etecs poderão manter classes descentralizadas mediante a
celebração de convênios devidamente aprovados pelo Conselho Deliberativo, a
fim de atender às necessidades locais e regionais.
          </Text>
          <Text style={css.chapter}>
          Artigo 2º
          </Text>
          <Text style={css.chapText}>
          As Etecs integram uma rede de escolas, caracterizada:
I - pela unidade de princípios e procedimentos pedagógicos e administrativos
para a implementação de políticas públicas de educação profissional definidas
pelo CEETEPS;
II - pelo respeito à diversidade das Etecs e ao atendimento às demandas locais
e regionais.</Text>
        </View> 
        <Text style={css.chapter}>CAPÍTULO II – Dos Princípios e Das Finalidades</Text>
        <View>
        <Text style={css.chapter}>Artigo 3º</Text>
        <Text style={css.chapText}>
        Os princípios de gestão democrática nortearão a gestão da Etec,
valorizando as relações baseadas no diálogo e no consenso, tendo como
práticas a participação, a discussão coletiva e a autonomia.
Parágrafo único - A participação deverá possibilitar a todos os membros da
comunidade escolar o comprometimento no processo de tomada de decisões
para a organização e para o funcionamento da Etec e propiciar um clima de
trabalho favorável a uma maior aproximação entre todos os segmentos das
Etecs.</Text>
        <Text style={css.chapter}>Artigo 4º</Text>
        <Text style={css.chapText}>
        As Etecs, escolas públicas e gratuitas, terão por finalidades:
I - capacitar o educando para o exercício da cidadania e fornecer-lhe meios
para sua inserção e progressão no trabalho e em estudos posteriores;
II - desenvolver no educando aptidões para a vida produtiva e social;
III - constituir-se em instituição de produção, difusão e transmissão cultural,
científica, tecnológica e desportiva para a comunidade local ou regional.
        </Text>
        <Text style={css.chapter}>Artigo 5º</Text>
        <Text style={css.chapText}>
        As Etecs do Centro Paula Souza poderão oferecer cursos e programas, presenciais ou a distância, de:
I - Educação Profissional de Formação Inicial e Continuada ou Qualificação
Profissional, nas formas previstas pela legislação;
II - Educação Profissional Técnica de Nível Médio, nas formas previstas pela
legislação;
III - Ensino Médio;
IV - Educação de Jovens e Adultos em Nível de Educação Básica,
preferencialmente em articulação com a educação profissional.</Text>
        <Text style={css.chapter}>Artigo 6º</Text>
        <Text style={css.chapText}>
        As Etecs poderão oferecer, conforme suas disponibilidades, cursos
e programas, presenciais ou a distância, de capacitação, especialização,
aperfeiçoamento, atualização e outros de interesse da comunidade, para
docentes, demais servidores das Etecs e trabalhadores em geral.
        </Text>
        <Text style={css.chapter}>Artigo 7º</Text>
        <Text style={css.chapText}>
        Além dos cursos e programas previstos nos artigos 5º e 6º, as Etecs
poderão, complementarmente, desenvolver atividades referentes a:
I - extensão e/ou prestação de serviços à comunidade e à região;
II - pesquisas científicas e tecnológicas, de interesse do ensino e da
comunidade, da região ou do CEETEPS;
III - organização de eventos de difusão cultural, científica, tecnológica e de
caráter esportivo, de interesse para os cursos e programas mantidos ou para a
comunidade e a região.
        </Text>
        <Text style={css.chapter}>Artigo 8º</Text>
        <Text style={css.chapText}>
        A instalação de cursos, programas e atividades previstas nos
artigos 5º e 6º e nos incisos I, II e III, do artigo 7º está sujeita à aprovação
prévia do CEETEPS e dos órgãos competentes do sistema de ensino.
Parágrafo único - As Etecs poderão oferecer cursos e programas em regime
de:
I - intercomplementaridade com outras instituições de ensino;
II - alternância com empresas, entidades públicas ou privadas e
empreendimentos familiares.
        </Text>
        <Text style={css.chapter}>Artigo 9º</Text>
        <Text style={css.chapText}>
        Para a consecução de suas finalidades, as Etecs poderão
estabelecer parcerias com empresas e instituições de ensino ou de pesquisa,
públicas ou privadas, sujeitas à aprovação prévia da Superintendência do
CEETEPS e dos órgãos competentes do sistema de ensino.
        </Text>
        </View>

        <Text style={css.title}>TÍTULO II – Da Organização Técnica - Administrativa</Text>
        <Text style={css.chapter}>CAPÍTULO I – Do Conselho de Escola</Text>
        <View>
          <Text style={css.chapter}>Artigo 10 </Text>
          <Text style={css.chapText}>
          A Etec terá, como órgão deliberativo, o Conselho de Escola,
integrado por representantes da comunidade escolar e da comunidade extraescolar, cuja composição será:
          </Text>
          <Text style={css.chapter}>I - pela comunidade escolar:</Text>
          <Text style={css.chapText}>a) Diretor, presidente nato;</Text>
          <Text style={css.chapText}>b) um representante das diretorias de serviços e relações institucionais;</Text>
          <Text style={css.chapText}>c) um representante dos professores;</Text>
          <Text style={css.chapText}>d) um representante dos servidores técnico e administrativos;</Text>
          <Text style={css.chapText}>e) um representante dos pais de alunos;</Text>
          <Text style={css.chapText}>f) um representante dos alunos;</Text>
          <Text style={css.chapText}>g) um representante das instituições auxiliares.</Text>

          <Text style={css.chapter}>II - pela comunidade extraescolar:</Text>
          <Text style={css.chapText}>a) representante de órgão de classe;</Text>
          <Text style={css.chapText}>b) representante dos empresários, vinculado a um dos cursos;</Text>
          <Text style={css.chapText}>c) aluno egresso atuante em sua área de formação técnica;</Text> 
          <Text style={css.chapText}>d) representante do poder público municipal;</Text>
          <Text style={css.chapText}>e) representante de instituição de ensino, vinculada a um dos cursos;</Text> 
          <Text style={css.chapText}>f) representantes de demais segmentos de interesse da escola.</Text> 
          <Text style={css.chapText}>§ 1º- A composição da comunidade extraescolar será de, no mínimo, quatro membros e, no máximo, de sete membros. </Text>
          <Text style={css.chapText}>§ 2º - Os representantes mencionados no inciso I, alíneas de “b” a “g”, serão
escolhidos pelos seus pares, e os mencionados no inciso II serão convidados
pela Direção da Escola.</Text>
          <Text style={css.chapText}>§ 3º - Os representantes cumprirão mandato de um ano, permitidas
reconduções.</Text>  

          <Text style={css.chapter}>Artigo 11</Text>
          <Text style={css.chapText}>O Conselho de Escola terá as seguintes atribuições:</Text>
          <Text style={css.chapText}>I - deliberar sobre:</Text>
<Text style={css.chapText}>a) o projeto político-pedagógico da escola;</Text>
<Text style={css.chapText}>b) as alternativas de solução para os problemas acadêmicos e pedagógicos;</Text>
<Text style={css.chapText}>c) as prioridades para aplicação de recursos.</Text>
<Text style={css.chapText}>II – estabelecer diretrizes e propor ações de integração da Etec com a comunidade;</Text>
<Text style={css.chapText}>III - propor a implantação ou extinção de cursos oferecidos pela Etec, de acordo com as demandas locais e regionais e outros indicadores;</Text>
<Text style={css.chapText}>IV - aprovar o Plano Plurianual de Gestão e o Plano Escolar;</Text>
<Text style={css.chapText}>V - apreciar os relatórios anuais da escola, analisando seu desempenho diante
das diretrizes e metas estabelecidas.</Text>
<Text style={css.chapText}>§ 1º - O Conselho de Escola poderá ser convocado pela Direção para
manifestar-se sobre outros temas de interesse da comunidade escolar.</Text>
<Text style={css.chapText}>§ 2º - O Conselho de Escola reunir-se-á, ordinariamente, no mínimo, duas
vezes a cada semestre e, extraordinariamente, quando convocado pelo seu
presidente ou pela maioria de seus membros.</Text>
<Text style={css.chapText}>§ 3º - As reuniões do Conselho de Escola deverão contar com a presença
mínima da maioria simples de seus membros.</Text>
<Text style={css.chapText}>§ 4º - Nas decisões a serem tomadas por maioria simples, todos os membros
terão direito a voto, cabendo ao diretor o voto de desempate.</Text>
        </View>
      </View>
      );
  }
}