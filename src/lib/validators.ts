// src/lib/validators.ts

export function validarCpf(cpf: string | undefined | null): boolean {
  if (!cpf) return false;

  // Remove caracteres não numéricos
  const cpfNumerico = cpf.replace(/\D/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cpfNumerico.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (ex: 111.111.111-11), o que é inválido
  if (/^(\d)\1+$/.test(cpfNumerico)) {
    return false;
  }

  let soma = 0;
  let resto;

  // Calcula o primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpfNumerico.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) { // Na regra original, 10 ou 11 viram 0
    resto = 0;
  }
  if (resto !== parseInt(cpfNumerico.substring(9, 10))) {
    return false;
  }

  soma = 0;
  // Calcula o segundo dígito verificador
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpfNumerico.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) { // Na regra original, 10 ou 11 viram 0
    resto = 0;
  }
  if (resto !== parseInt(cpfNumerico.substring(10, 11))) {
    return false;
  }

  return true;
}