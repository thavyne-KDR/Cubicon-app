
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

// Tutoriais detalhados para cada cubo
const tutorials = {
	'Cubo 2x2': [
		{ title: 'Montar a primeira camada (camada de base)', desc: 'Forme uma face completa (qualquer cor como base). Posicione e oriente cantos.', moves: "R U R' U'", human: 'Gire a face direita, depois a de cima, e repita para posicionar cantos.' },
		{ title: 'Colocar cantos restantes', desc: 'Use o algoritmo de inserção de canto até todos os cantos estarem na posição correta.', moves: "R' D' R D", human: 'Segure o canto que precisa ser colocado na posição correta e aplique o algoritmo até ele encaixar.' },
		{ title: 'Finalizar', desc: 'Gire os cantos restantes com o mesmo algoritmo repetidamente.', moves: "R' D' R D (repita quando necessário)", human: 'Repita o algoritmo até que todos os cantos estejam orientados corretamente.' },
	],

	'Cubo 3x3': [
		{ title: 'Fazer a cruz', desc: 'Forme a cruz na face inferior da cor escolhida (centros fixos).', moves: '— (movimentos variados, peça por peça)', human: 'Procure formar primeiro as 4 arestas da cruz antes de posicionar cantos.' },
		{ title: 'Inserir cantos da primeira camada', desc: 'Coloque os cantos da primeira camada com este algoritmo de inserção:', moves: "R' D' R D", human: 'Segure o cubo de forma que o canto a inserir esteja à sua frente e aplique o algoritmo até encaixar.' },
		{ title: 'F2L (par de aresta+canto)', desc: 'Combine arestas e cantos da segunda camada. Exemplo de preparação e inserção:', moves: "U R U' R'", human: 'Encontre um par canto+aresta e use movimentos para juntá-los e inserir na posição correta.' },
		{ title: 'OLL (orientar a última camada) — exemplo Sune', desc: 'Exemplo de algoritmo para orientar as últimas peças (uma das OLLs):', moves: "R U R' U R U2 R' (Sune)", human: 'Este algoritmo orienta várias peças do topo — pratique até reconhecer a posição antes de aplicar.' },
		{ title: 'PLL (permuta da última camada) — exemplo U-perm', desc: 'Exemplo de permuta para finalizar a última camada:', moves: "R U' R U R U R U' R' U' R2", human: 'Algoritmo de permuta — troca posições das peças já orientadas para finalizar o cubo.' },
		{ title: 'Dicas', desc: 'Pratique os algoritmos devagar até memorizá-los; depois aumente a velocidade.', moves: '', human: 'Comece devagar, entenda o que cada algoritmo faz e aumente a velocidade com prática.' },
	],

	'Cubo 4x4': [
		{ title: 'Formar centros', desc: 'Monte os 6 centros (2x2 para cada centro).', moves: '— (muitos giros internos e externos)', human: 'Agrupe as peças centrais por cor formando blocos 2x2.' },
		{ title: 'Parear arestas', desc: 'Combine peças de aresta para transformá-las em arestas do tipo 3x3.', moves: 'Algoritmos de pareamento (variam conforme a peça)', human: 'Use movimentos específicos para juntar as metades de cada aresta até formar pares completos.' },
		{ title: 'Resolver como 3x3', desc: 'Após parear, resolva o cubo como um 3x3. Tenha atenção ao parity.', moves: 'Se parity ocorrer, aplique algoritmo de parity (ex.: OLL parity): R U2 R\' U2 R U2 L U2 R\' U2 R U2 R U2 L\'', human: 'Depois de parear, proceda como em um 3x3; se aparecerem paridades, use os algoritmos de correção.' },
	],

	'Pyraminx': [
		{ title: 'Ajustar pontas', desc: 'Gire as pontas para a posição correta.', moves: 'Movimentos simples nas pontas', human: 'Gire as pontas até que todas fiquem orientadas corretamente - normalmente movimentos curtos bastam.' },
		{ title: 'Resolver as lâminas laterais', desc: 'Resolver as camadas laterais uma a uma.', moves: 'Movimentos de rotação das faces (R, L, U, B) conforme necessário', human: 'Resolva cada lado com movimentos simples, alinhando as peças uma a uma.' },
	],
};

export default function TutorialSteps() {
	const { name } = useLocalSearchParams();
	const steps = tutorials[name] || [{ title: 'Nenhum tutorial', desc: 'Não há tutorial para este cubo.', moves: '' }];

	const [index, setIndex] = useState(0);
	const [showAll, setShowAll] = useState(false);

	const next = () => setIndex(i => Math.min(i + 1, steps.length - 1));
	const prev = () => setIndex(i => Math.max(i - 1, 0));

	return (
		<>
			<Stack.Screen options={{ title: `Tutorial: ${name || 'Cubos'}` }} />

			<ScrollView style={styles.container} contentContainerStyle={styles.content}>
				<Text style={styles.title}>{name}</Text>

				<View style={styles.legendBox}>
					<Text style={styles.legendTitle}>Como ler a notação</Text>
					<Text style={styles.legendText}>R = face direita | L = face esquerda | U = face de cima | D = face de baixo</Text>
					<Text style={styles.legendText}>F = face da frente | B = face de trás. Um apóstrofo (') = giro anti-horário. Ex.: R' = direita inversa.</Text>
				</View>

				<View style={styles.controlsRow}>
					<TouchableOpacity style={styles.smallButton} onPress={() => setShowAll(s => !s)}>
						<Text style={styles.smallButtonText}>{showAll ? 'Mostrar passo a passo' : 'Mostrar todas as etapas'}</Text>
					</TouchableOpacity>
				</View>

				{showAll ? (
					<View style={styles.movesList}>
						{steps.map((s, i) => (
							<View key={i} style={styles.moveBlock}>
								<Text style={styles.moveTitle}>{i + 1}. {s.title}</Text>
								{s.desc ? <Text style={styles.moveDesc}>{s.desc}</Text> : null}
								{s.moves ? (
									<>
										<Text style={styles.moveLabel}>Algoritmo (notação):</Text>
										<Text style={styles.moveAlg}>{s.moves}</Text>
										<Text style={styles.moveHuman}>{s.human || ''}</Text>
									</>
								) : null}
							</View>
						))}
					</View>
				) : (
					<View style={styles.stepBox}>
						<Text style={styles.stepIndex}>Passo {index + 1} de {steps.length}</Text>
						<Text style={styles.stepTitle}>{steps[index].title}</Text>
						{steps[index].desc ? <Text style={styles.stepDesc}>{steps[index].desc}</Text> : null}
						{steps[index].moves ? (
							<>
								<Text style={styles.moveLabel}>Algoritmo (notação):</Text>
								<Text style={styles.stepMove}>{steps[index].moves}</Text>
								<Text style={styles.moveHuman}>{steps[index].human || ''}</Text>
							</>
						) : null}

						<View style={styles.stepControls}>
							<TouchableOpacity style={[styles.navButton, index === 0 && styles.navDisabled]} onPress={prev} disabled={index === 0}>
								<Text style={styles.navText}>← Voltar</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.navButton, index === steps.length - 1 && styles.navDisabled]} onPress={next} disabled={index === steps.length - 1}>
								<Text style={styles.navText}>Avançar →</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}

				<View style={{ height: 40 }} />
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#F9F9F9' },
	content: { padding: 20, alignItems: 'center' },
	title: { fontSize: 26, fontWeight: '700', color: '#222', marginBottom: 8 },
	legendBox: { width: '100%', padding: 12, backgroundColor: '#fff', borderRadius: 10, marginBottom: 12 },
	legendTitle: { fontWeight: '700', marginBottom: 6 },
	legendText: { color: '#444', fontSize: 13 },
	controlsRow: { flexDirection: 'row', marginBottom: 12 },
	smallButton: { backgroundColor: '#eee', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, marginHorizontal: 6 },
	smallButtonText: { color: '#333', fontWeight: '600' },
	movesList: { width: '100%', padding: 12, backgroundColor: '#fff', borderRadius: 10 },
	moveBlock: { paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
	moveTitle: { fontSize: 16, fontWeight: '700', color: '#111' },
	moveDesc: { fontSize: 14, color: '#444', marginTop: 4 },
	moveLabel: { marginTop: 8, color: '#666', fontSize: 13 },
	moveAlg: { fontSize: 15, color: '#007AFF', marginTop: 6, fontWeight: '700' },
	moveHuman: { fontSize: 14, color: '#333', marginTop: 6 },
	stepBox: { width: '100%', padding: 24, backgroundColor: '#fff', borderRadius: 14, alignItems: 'center' },
	stepIndex: { color: '#666', marginBottom: 6 },
	stepTitle: { fontSize: 20, fontWeight: '700', color: '#222' },
	stepDesc: { fontSize: 15, color: '#444', marginTop: 8, textAlign: 'center' },
	stepMove: { fontSize: 34, fontWeight: '800', color: '#007AFF', marginTop: 12 },
	stepControls: { flexDirection: 'row', marginTop: 18 },
	navButton: { backgroundColor: '#007AFF', paddingVertical: 10, paddingHorizontal: 18, borderRadius: 10, marginHorizontal: 8 },
	navText: { color: '#fff', fontWeight: '700' },
	navDisabled: { opacity: 0.4 },
});
