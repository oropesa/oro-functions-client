import Ofn from '../../dist';

describe('fn: getFilenameExtByName', () => {
  // test('fn: getFilenameExtByName( undefined )', () => {
  //   expect(Ofn.getFilenameExtByName(undefined)).toBe('');
  // });
  test('fn: getFilenameExtByName( str )', () => {
    expect(Ofn.getFilenameExtByName('chacho.pdf')).toBe('pdf');
  });
  test('fn: getFilenameExtByName( str w/o dot )', () => {
    expect(Ofn.getFilenameExtByName('chacho')).toBe('');
  });
  test('fn: getFilenameExtByName( path )', () => {
    expect(Ofn.getFilenameExtByName('C:/tmp/.htaccess')).toBe('htaccess');
  });
});

describe('fn: getFilenameWOutExtByName', () => {
  // test('fn: getFilenameWOutExtByName( undefined )', () => {
  //   expect(Ofn.getFilenameWOutExtByName(undefined)).toBe('');
  // });
  test('fn: getFilenameWOutExtByName( str )', () => {
    expect(Ofn.getFilenameWOutExtByName('chacho.pdf')).toBe('chacho');
  });
  test('fn: getFilenameWOutExtByName( str w/o dot )', () => {
    expect(Ofn.getFilenameWOutExtByName('chacho')).toBe('chacho');
  });
  test('fn: getFilenameWOutExtByName( path )', () => {
    expect(Ofn.getFilenameWOutExtByName('C:/tmp/.htaccess')).toBe('');
  });
});

describe('fn: getFilenameByPath', () => {
  // test('fn: getFilenameByPath( undefined )', () => {
  //   expect(Ofn.getFilenameByPath(undefined)).toBe('');
  // });
  test('fn: getFilenameByPath( str )', () => {
    expect(Ofn.getFilenameByPath('chacho.pdf')).toBe('chacho.pdf');
  });
  test('fn: getFilenameByPath( path )', () => {
    expect(Ofn.getFilenameByPath('C:/tmp/chacho.pdf')).toBe('chacho.pdf');
  });
});

describe('fn: getFolderByPath', () => {
  // test('fn: getFolderByPath( undefined )', () => {
  //   expect(Ofn.getFolderByPath(undefined)).toBe('');
  // });
  test('fn: getFolderByPath( str )', () => {
    expect(Ofn.getFolderByPath('chacho.pdf')).toBe('');
  });
  test('fn: getFolderByPath( path )', () => {
    expect(Ofn.getFolderByPath('C:/tmp/chacho.pdf')).toBe('C:/tmp');
  });
  test('fn: getFolderByPath( path, 2 )', () => {
    expect(Ofn.getFolderByPath('C:/tmp/chacho.pdf', 2)).toBe('C:');
  });
  test('fn: getFolderByPath( path, 5 )', () => {
    expect(Ofn.getFolderByPath('C:/tmp/chacho.pdf', 5)).toBe('');
  });
});

describe('fn: slugifyFilename', () => {
  // test('fn: slugifyFilename( undefined )', () => {
  //   expect(Ofn.slugifyFilename(undefined)).toBe('');
  // });
  test('fn: slugifyFilename( str )', () => {
    expect(Ofn.slugifyFilename('Chacho Loco.pdf')).toBe('chacho-loco.pdf');
  });
  test('fn: slugifyFilename( str2 )', () => {
    expect(Ofn.slugifyFilename('Chacho Loco')).toBe('chacho-loco');
  });
  test('fn: slugifyFilename( path )', () => {
    expect(Ofn.slugifyFilename('C:/tmp/Chacho Loco.pdf')).toBe('chacho-loco.pdf');
  });
});

describe('fn: sanitizePath', () => {
  // test('fn: sanitizePath( undefined )', () => {
  //   expect(Ofn.sanitizePath(undefined)).toBe('');
  // });
  test('fn: sanitizePath( path )', () => {
    expect(Ofn.sanitizePath('C:\\tmp\\chacho.pdf')).toBe('C:/tmp/chacho.pdf');
  });
  test('fn: sanitizePath( path2 )', () => {
    expect(Ofn.sanitizePath('\\\\tmp\\chacho.pdf')).toBe('\\\\tmp/chacho.pdf');
  });
  test('fn: sanitizePath( path2 )', () => {
    expect(Ofn.sanitizePath('\\\\tmp\\chacho.pdf')).toBe('\\\\tmp/chacho.pdf');
  });
});

describe('fn: sanitizeFilename', () => {
  // test('fn: sanitizeFilename( undefined )', () => {
  //   expect(Ofn.sanitizeFilename(undefined)).toBe('');
  // });
  test('fn: sanitizeFilename( str )', () => {
    expect(Ofn.sanitizeFilename('ÁËÌÒÑ.pdf')).toBe('AEION.pdf');
  });
  test('fn: sanitizeFilename( str2 )', () => {
    expect(Ofn.sanitizeFilename('<Æ>Ø:')).toBe('-AE-O-');
  });
  test('fn: sanitizeFilename( path )', () => {
    expect(Ofn.sanitizeFilename('C:/tmp/ÁËÌÒÑ.pdf')).toBe('AEION.pdf');
  });
});
