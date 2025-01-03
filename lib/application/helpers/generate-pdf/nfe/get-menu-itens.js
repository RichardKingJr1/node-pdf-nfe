"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuItens = void 0;
const default_1 = require("./default");
const linha_horizontal_1 = require("./linha-horizontal");
const linha_vertical_1 = require("./linha-vertical");
const secao_1 = require("./secao");
const titulo_1 = require("./titulo");
function getMenuItens({ y, doc, ajusteX, ajusteY, margemEsquerda, margemTopo, margemDireita, finalEspacoDet, larguraDoFormulario }) {
    (0, linha_horizontal_1.linhaHorizontal)({ x1: -0.5, x2: 0.5, y: y + 17, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: -0.5, x2: 0.5, y: y + 32, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: -0.5, x2: 0.5, y: finalEspacoDet, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 0, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 53, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 236.5, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 267, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 293.5, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 315, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 333, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 373, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 407.5, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 441.5, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 475, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 508, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 533.5, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: 557, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 17, y2: finalEspacoDet, x: larguraDoFormulario, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, secao_1.secao)({ doc, value: 'DADOS DOS PRODUTOS / SERVIÇOS', x: 1.5, y: y + 8, largura: 0, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, titulo_1.titulo)({
        value: 'CÓDIGO',
        x: 1.5,
        y: y + 21,
        largura: 50.5,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'DESCRIÇÃO DO PRODUTO / SERVIÇO',
        x: 55,
        y: y + 21,
        largura: 179,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'NCM/SH',
        x: 236.5,
        y: y + 21,
        largura: 31.5,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'O/CST',
        x: 270,
        y: y + 21,
        largura: 20,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'CFOP',
        x: 294.5,
        y: y + 21,
        largura: 19.5,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'UN.',
        x: 317,
        y: y + 21,
        largura: 14.5,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'QUANT.',
        x: 335,
        y: y + 21,
        largura: 37,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'VALOR UNIT.',
        x: 375,
        y: y + 21 - 3,
        largura: 31.5,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'VALOR TOTAL.',
        x: 409.5,
        y: y + 21 - 3,
        largura: 31.5,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'B. CÁLC. ICMS',
        x: 443,
        y: y + 21 - 3,
        largura: 31.5,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'VALOR ICMS',
        x: 476,
        y: y + 21 - 3,
        largura: 31.5,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'VALOR IPI',
        x: 507.5,
        y: y + 21 - 3,
        largura: 28,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'ALÍQ. ICMS',
        x: 532,
        y: y + 21 - 3,
        largura: 28,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'ALÍQ. IPI',
        x: 557.75,
        y: y + 21,
        largura: 28,
        alinhamento: default_1.DEFAULT_NFE.alinhamentoDoTituloDaTabela,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    return doc.y;
}
exports.getMenuItens = getMenuItens;
