const path = require('path');
const { copyFile, open } = require('node:fs/promises');

class AxiomCompilationPlugin {
    static defaultOptions = {
        outputFilePath: path.resolve('./dist/casino.js')
    };

    constructor(options = {}) {
        this.options = { ...AxiomCompilationPlugin.defaultOptions, ...options };
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tapAsync(
            'AxiomCompilationPlugin',
            (compilation, callback) => {
                const pathToCasinoFile = this.options.outputFilePath;

                const pathToLibraryFile = path.resolve('./dist/library.js');
                const pathToAxiomFile = path.resolve('./src/axiom.js');

                copyFile(pathToLibraryFile, pathToCasinoFile)
                    .then(() => {
                        console.log('Library file have been copied to BBS directory...');

                        const fdAxiomFilePromise = open(pathToAxiomFile, 'r');
                        const fdCasinoFilePromise = open(pathToCasinoFile, 'a+');

                        Promise.all([fdAxiomFilePromise, fdCasinoFilePromise])
                            .then(([fdAxiomFile, fdCasinoFile]) => {
                                const readStream = fdAxiomFile.createReadStream();
                                const writeStream = fdCasinoFile.createWriteStream();

                                writeStream.on('finish', () => {
                                    console.log('Axiom file updated...');
                                    callback();
                                });
                                readStream.pipe(writeStream);
                            })
                            .catch(error => console.error(`Error concatenating library file and Axiom file in BBS directory (${error.message})`));
                    })
                    .catch(error => console.error(`Error while copying library file to BBS directory (${error.message})`));
            }
        );
    }
}

module.exports = AxiomCompilationPlugin;