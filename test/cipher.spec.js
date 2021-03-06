describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',()=> {
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33',()=> {
      assert.equal(cipher.encode(33,'abcdefghijklmnopqrstuvwxyz'),'hijklmnopqrstuvwxyzabcdefg');
    });
     
    it('debería retornar "0123456789 !#$%&"   para   "0123456789 !#$%&" con offest 33',()=> {
      assert.equal(cipher.encode(33,'0123456789 !#$%&'),'0123456789 !#$%&');
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode(33,'hijklmnopqrstuvwxyzabcdefg'),'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "0123456789 !#$%&"   para  "0123456789 !#$%&" con offest 33',()=> {
      assert.equal(cipher.decode(33,'0123456789 !#$%&'),'0123456789 !#$%&');
    });

  });



  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',() =>{
      assert.equal(typeof cipher.createCipherWithOffset(33), 'object');
      assert.equal(typeof cipher.createCipherWithOffset(33).encode, 'function');  // el createCipherWithOffset necesita un OFFSET para devolverme una función: encode
      assert.equal(typeof cipher.createCipherWithOffset(33).decode, 'function');  // el createCipherWithOffset necesita un OFFSET para devolverme una función: decode
    });

    it('probando la funcionalidad de: función encode con offset fijado',() =>{   // TRABAJANDO
      assert.equal(cipher.createCipherWithOffset(33).encode('ABCD'), 'HIJK');
    });

    it('probando la funcionalidad de: función decode con offset fijado',() =>{   // TRABAJANDO
      assert.equal(cipher.createCipherWithOffset(33).decode('HIJK'), 'ABCD');
    });

   });

});
