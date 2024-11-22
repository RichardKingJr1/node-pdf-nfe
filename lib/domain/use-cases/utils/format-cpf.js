"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCpf = void 0;
function formatCpf(cpf) {
    if (!cpf)
        return '';
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
exports.formatCpf = formatCpf;
