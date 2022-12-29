import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';

import {ScrollView} from 'react-native-gesture-handler';
import ScreenThirteenButton from '../../constent/Buttons/ScreenThirteenButton';
const ScreenThirteen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <AppHeader />
      <Image
        source={require('../../images/partners.png')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          width: 80,
          height: 80,
          backgroundColor: '#FFFFFF',
          position: 'relative',
        }}
      />
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 30,
          color: 'black',
          marginBottom: 5,
        }}>
        Add Class Mates
      </Text>

      <Text
        style={{
          width: 320,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 5,

          color: 'black',
          marginBottom: 20,
        }}>
        Add your classmates as a friends to receive homework updates, study
        group sugeestions and more
      </Text>

      <ScrollView>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,

              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Image
              source={require('../../images/earth.png')}
              style={{
                width: 50,
                height: 50,
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                marginTop: 2,
                marginBottom: 10,
                fontWeight: '800',
                color: 'black',
                marginLeft: 10,
              }}>
              Geography {'\n'}
              <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                Room: 107 . 7AM-10AM
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: 'blue',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  marginRight: 10,
                  color: 'white',
                }}>
                Add All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,

                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Image
                source={require('../../images/man.png')}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 10,
                }}
              />

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 2,
                    marginBottom: 10,
                    fontWeight: '800',
                    color: 'black',
                    marginLeft: 10,
                  }}>
                  Maria{' '}
                  <Image
                    source={require('../../images/bluetick.png')}
                    style={{
                      width: 15,
                      height: 15,
                      marginLeft: 10,
                    }}
                  />
                  {'\n'}
                  <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                    In your class
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 40,
                  marginRight: 5,
                  backgroundColor: 'grey',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 20,
                    marginRight: 20,
                    color: 'white',
                  }}>
                  + Add
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20, marginBottom: 40}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,

                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../images/woman.png')}
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 10,
                  }}
                />

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 2,
                      marginBottom: 10,
                      fontWeight: '800',
                      color: 'black',
                      marginLeft: 10,
                    }}>
                    Anna{' '}
                    <Image
                      source={require('../../images/bluetick.png')}
                      style={{
                        width: 15,
                        height: 15,
                        marginLeft: 10,
                      }}
                    />
                    {'\n'}
                    <Text
                      style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                      In your class
                    </Text>
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 40,
                    marginRight: 5,
                    backgroundColor: 'grey',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      marginRight: 20,
                      color: 'white',
                    }}>
                    + Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,

              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Image
              source={require('../../images/right-triangle.png')}
              style={{
                width: 50,
                height: 50,
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                marginTop: 2,
                marginBottom: 10,
                fontWeight: '800',
                color: 'black',
                marginLeft: 10,
              }}>
              Maths {'\n'}
              <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                Room: 107 . 7AM-10AM
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: 'blue',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  marginRight: 10,
                  color: 'white',
                }}>
                Add All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,

                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Image
                source={require('../../images/man.png')}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 10,
                }}
              />

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 2,
                    marginBottom: 10,
                    fontWeight: '800',
                    color: 'black',
                    marginLeft: 10,
                  }}>
                  Maria{' '}
                  <Image
                    source={require('../../images/bluetick.png')}
                    style={{
                      width: 15,
                      height: 15,
                      marginLeft: 10,
                    }}
                  />
                  {'\n'}
                  <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                    In your class
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 40,
                  marginRight: 5,
                  backgroundColor: 'grey',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 20,
                    marginRight: 20,
                    color: 'white',
                  }}>
                  + Add
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20, marginBottom: 40}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,

                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../images/woman.png')}
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 10,
                  }}
                />

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 2,
                      marginBottom: 10,
                      fontWeight: '800',
                      color: 'black',
                      marginLeft: 10,
                    }}>
                    Anna{' '}
                    <Image
                      source={require('../../images/bluetick.png')}
                      style={{
                        width: 15,
                        height: 15,
                        marginLeft: 10,
                      }}
                    />
                    {'\n'}
                    <Text
                      style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                      In your class
                    </Text>
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 40,
                    marginRight: 5,
                    backgroundColor: 'grey',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      marginRight: 20,
                      color: 'white',
                    }}>
                    + Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,

              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Image
              source={require('../../images/dna.png')}
              style={{
                width: 50,
                height: 50,
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                marginTop: 2,
                marginBottom: 10,
                fontWeight: '800',
                color: 'black',
                marginLeft: 10,
              }}>
              Biology {'\n'}
              <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                Room: 107 . 7AM-10AM
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: 'blue',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  marginRight: 10,
                  color: 'white',
                }}>
                Add All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,

                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Image
                source={require('../../images/man.png')}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 10,
                }}
              />

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 2,
                    marginBottom: 10,
                    fontWeight: '800',
                    color: 'black',
                    marginLeft: 10,
                  }}>
                  Maria{' '}
                  <Image
                    source={require('../../images/bluetick.png')}
                    style={{
                      width: 15,
                      height: 15,
                      marginLeft: 10,
                    }}
                  />
                  {'\n'}
                  <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                    In your class
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 40,
                  marginRight: 5,
                  backgroundColor: 'grey',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 20,
                    marginRight: 20,
                    color: 'white',
                  }}>
                  + Add
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20, marginBottom: 40}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,

                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../images/woman.png')}
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 10,
                  }}
                />

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 2,
                      marginBottom: 10,
                      fontWeight: '800',
                      color: 'black',
                      marginLeft: 10,
                    }}>
                    Anna{' '}
                    <Image
                      source={require('../../images/bluetick.png')}
                      style={{
                        width: 15,
                        height: 15,
                        marginLeft: 10,
                      }}
                    />
                    {'\n'}
                    <Text
                      style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                      In your class
                    </Text>
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 40,
                    marginRight: 5,
                    backgroundColor: 'grey',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      marginRight: 20,
                      color: 'white',
                    }}>
                    + Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,

              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Image
              source={require('../../images/test-tubes.png')}
              style={{
                width: 50,
                height: 50,
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                marginTop: 2,
                marginBottom: 10,
                fontWeight: '800',
                color: 'black',
                marginLeft: 10,
              }}>
              Chemistry {'\n'}
              <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                Room: 107 . 7AM-10AM
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: 'blue',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  marginRight: 10,
                  color: 'white',
                }}>
                Add All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,

                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Image
                source={require('../../images/man.png')}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 10,
                }}
              />

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 2,
                    marginBottom: 10,
                    fontWeight: '800',
                    color: 'black',
                    marginLeft: 10,
                  }}>
                  Maria{' '}
                  <Image
                    source={require('../../images/bluetick.png')}
                    style={{
                      width: 15,
                      height: 15,
                      marginLeft: 10,
                    }}
                  />
                  {'\n'}
                  <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                    In your class
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 40,
                  marginRight: 5,
                  backgroundColor: 'grey',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 20,
                    marginRight: 20,
                    color: 'white',
                  }}>
                  + Add
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20, marginBottom: 40}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,

                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../images/woman.png')}
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 10,
                  }}
                />

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 2,
                      marginBottom: 10,
                      fontWeight: '800',
                      color: 'black',
                      marginLeft: 10,
                    }}>
                    Anna{' '}
                    <Image
                      source={require('../../images/bluetick.png')}
                      style={{
                        width: 15,
                        height: 15,
                        marginLeft: 10,
                      }}
                    />
                    {'\n'}
                    <Text
                      style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
                      In your class
                    </Text>
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 40,
                    marginRight: 5,
                    backgroundColor: 'grey',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      marginRight: 20,
                      color: 'white',
                    }}>
                    + Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
       

       <ScreenThirteenButton />

      

      {/* <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 16, marginBottom: 5}}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenFourteen')}
          style={{
            backgroundColor: '#246BFD',
            width: 350,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            Continue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{fontSize: 16, marginTop: 5}}
            onPress={() => navigation.navigate('ScreenTen')}>
            Skip
          </Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default ScreenThirteen;
