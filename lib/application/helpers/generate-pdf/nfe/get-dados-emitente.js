"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDadosEmitente = void 0;
const utils_1 = require("../../../../domain/use-cases/utils");
const default_1 = require("./default");
const italico_1 = require("./italico");
const linha_horizontal_1 = require("./linha-horizontal");
const linha_vertical_1 = require("./linha-vertical");
const negrito_1 = require("./negrito");
const normal_1 = require("./normal");
const titulo_1 = require("./titulo");
async function getDadosEmitente({ y, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo, larguraDoFormulario, emit, protNFe, pathLogo, ide, folha }) {
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 317, x2: -254.7, y: y + 53.1, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 317, x2: -254.7, y: y + 72.9, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 53.1, y2: y + 72.9, x: 317.4, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 53.1, y2: y + 72.9, x: 331.55, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 0, x2: 0, y: y + 15.25, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 340.05, x2: 0, y: y + 60.5, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 340.05, x2: 0, y: y + 83.1, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 0, x2: 0, y: y + 105.9, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 0, x2: 0, y: y + 125.7, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 0, x2: 0, y: y + 145.7, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 15.25, y2: y + 145.7, x: 0, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 15.25, y2: y + 105.7, x: 240.75, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 15.25, y2: y + 125.7, x: 340.05, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 15.25, y2: y + 145.7, x: larguraDoFormulario, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 125.7, y2: y + 145.7, x: 195.55, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 125.7, y2: y + 145.7, x: 391, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, titulo_1.titulo)({
        value: 'DANFE',
        x: 266.5,
        y: y + 19.2,
        largura: 197,
        alinhamento: 'left',
        tamanho: 14,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, italico_1.italico)({
        doc,
        value: 'IDENTIFICAÇÃO DO EMITENTE',
        x: 1,
        y: y + 15.7,
        largura: 238,
        alinhamento: 'center',
        tamanho: 10,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    const identificacaoDoEmitenteY = pathLogo !== undefined ? y + 33.7 : y + 39.7;
    const identificacaoDoEmitenteX = pathLogo !== undefined ? 67 : 1.5;
    const identificacaoDoEmitenteLargura = pathLogo !== undefined ? 172 : 237;
    const identificacaoDoEmitenteFonte = pathLogo !== undefined ? 0 : 1.5;
    if (pathLogo !== undefined) {
        if (folha === 0) {
            doc.image(pathLogo, margemEsquerda + ajusteX + 4.5, margemTopo + ajusteY + default_1.DEFAULT_NFE.ajusteYDoLogotipo + 78, {
                fit: [60, 60]
            });
        }
        else {
            doc.image(pathLogo, margemEsquerda + ajusteX + 4.5, margemTopo + ajusteY + default_1.DEFAULT_NFE.ajusteYDoLogotipo + 33, {
                fit: [60, 60]
            });
        }
    }
    (0, negrito_1.negrito)({
        doc,
        value: emit.xNome,
        x: identificacaoDoEmitenteX,
        y: identificacaoDoEmitenteY + default_1.DEFAULT_NFE.ajusteYDaIdentificacaoDoEmitente,
        largura: identificacaoDoEmitenteLargura,
        alinhamento: 'center',
        tamanho: 8 + identificacaoDoEmitenteFonte,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: `${emit.enderEmit.xLgr}, ${emit.enderEmit.nro} ${emit.enderEmit.xCpl ?? ''}`,
        x: identificacaoDoEmitenteX,
        y: doc.y - margemTopo + 2,
        largura: identificacaoDoEmitenteLargura,
        alinhamento: 'center',
        tamanho: 6 + identificacaoDoEmitenteFonte,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: `${emit.enderEmit.xBairro}. ${emit.enderEmit.xMun}-${emit.enderEmit.UF}`,
        x: identificacaoDoEmitenteX,
        y: doc.y - margemTopo,
        largura: identificacaoDoEmitenteLargura,
        alinhamento: 'center',
        tamanho: 6 + identificacaoDoEmitenteFonte,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    if (emit.enderEmit && emit.enderEmit.fone !== undefined) {
        (0, normal_1.normal)({
            doc,
            value: 'Telefone: ' + (0, utils_1.formatPhone)(emit.enderEmit.fone),
            x: identificacaoDoEmitenteX,
            y: doc.y - margemTopo + 2,
            largura: identificacaoDoEmitenteLargura,
            alinhamento: 'center',
            tamanho: 6 + identificacaoDoEmitenteFonte,
            ajusteX,
            ajusteY,
            margemEsquerda,
            margemTopo
        });
    }
    (0, normal_1.normal)({
        doc,
        value: 'Documento Auxiliar da Nota Fiscal Eletrônica',
        x: 241.5,
        y: y + 32.7,
        largura: 99.5,
        alinhamento: 'center',
        tamanho: 10,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: '0 - ENTRADA',
        x: 248,
        y: y + 55.7,
        largura: 99.5,
        alinhamento: 'left',
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: '1 - SAÍDA',
        x: 248,
        y: y + 64.2,
        largura: 99.5,
        alinhamento: 'left',
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: ide.tpNF,
        x: 317.5,
        y: y + 52.5,
        largura: 14.5,
        alinhamento: 'center',
        tamanho: 18,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: 'Consulta de autenticidade no portal nacional da NF-e',
        x: 340.5,
        y: y + 85.7,
        largura: 244,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: 'www.nfe.fazenda.gov.br/portal ou no site da Sefaz Autorizadora',
        x: 340.5,
        y: y + 93.7,
        largura: 244,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: 'Nº. ' + ide.nNF.padStart(9, '0').replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3'),
        x: 241.2,
        y: y + 75.2,
        largura: 98.5,
        alinhamento: 'center',
        tamanho: 10,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    (0, normal_1.normal)({
        doc,
        value: 'Série ' + ide.serie,
        x: 241.2,
        y: y + 85.2,
        largura: 98.5,
        alinhamento: 'center',
        tamanho: 10,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
}
exports.getDadosEmitente = getDadosEmitente;
